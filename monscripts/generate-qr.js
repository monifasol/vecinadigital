/**
 * Vecina Digital — QR generator
 * =============================
 *
 * HOW TO REGENERATE THE QR
 * ------------------------
 * From the project root, run:
 *
 *   npm run generate-qr
 *
 * or directly:
 *
 *   node monscripts/generate-qr.js
 *
 * WHERE FILES ARE SAVED
 * ---------------------
 * - public/qr/vecina-hola-qr.png  → high-resolution raster (print)
 * - public/qr/vecina-hola-qr.svg  → vector version (print / design tools)
 *
 * HOW TO CHANGE THE URL LATER
 * ---------------------------
 * Edit CONFIG.url below, then run the script again.
 * Both output files will be overwritten.
 */

const fs = require("fs/promises")
const path = require("path")

const QRCode = require("qrcode")
const sharp = require("sharp")

// ─── Configuration ───────────────────────────────────────────────────────────

const CONFIG = {
  /** Destination URL encoded in the QR code. Change this when the landing page moves. */
  url: "https://vecinadigital.es/hola",

  /** QR code width and height in pixels (print resolution). */
  qrSize: 1200,

  /** Quiet zone around the QR modules (in modules, per the qrcode library). */
  margin: 2,

  /** High error correction — required when placing a logo in the centre. */
  errorCorrectionLevel: "H",

  darkColor: "#5E554B",
  lightColor: "#F8F4EE",

  /**
   * Centre door icon as a fraction of the QR width.
   * ~14 % is safe with level H and still scans reliably on phones.
   */
  iconScale: 0.14,

  /** Extra padding behind the icon so modules do not show through. */
  iconPadScale: 0.2,

  outputDir: path.join(__dirname, "..", "public", "qr"),
  doorPath: path.join(__dirname, "..", "public", "assets", "door.png"),

  pngFile: "vecina-hola-qr.png",
  svgFile: "vecina-hola-qr.svg",
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function iconLayout() {
  const iconSize = Math.round(CONFIG.qrSize * CONFIG.iconScale)
  const padSize = Math.round(CONFIG.qrSize * CONFIG.iconPadScale)
  const center = CONFIG.qrSize / 2

  return {
    iconSize,
    padSize,
    iconX: center - iconSize / 2,
    iconY: center - iconSize / 2,
    padX: center - padSize / 2,
    padY: center - padSize / 2,
    padRadius: Math.round(padSize * 0.12),
  }
}

async function ensureOutputDir() {
  await fs.mkdir(CONFIG.outputDir, { recursive: true })
}

async function generateQrSvgString() {
  return QRCode.toString(CONFIG.url, {
    type: "svg",
    errorCorrectionLevel: CONFIG.errorCorrectionLevel,
    margin: CONFIG.margin,
    color: {
      dark: CONFIG.darkColor,
      light: CONFIG.lightColor,
    },
  })
}

function extractQrSvgParts(qrSvg) {
  const viewBoxMatch = qrSvg.match(/viewBox="([^"]+)"/i)
  const innerMatch = qrSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/i)

  if (!viewBoxMatch || !innerMatch) {
    throw new Error("Could not parse QR SVG output from qrcode package.")
  }

  return {
    viewBox: viewBoxMatch[1],
    inner: innerMatch[1].trim(),
  }
}

function buildCompositeSvg({ qrInner, qrViewBox, doorBase64 }) {
  const { iconSize, padSize, iconX, iconY, padX, padY, padRadius } = iconLayout()
  const size = CONFIG.qrSize

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${size}"
     height="${size}"
     viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${CONFIG.lightColor}"/>

  <svg x="0" y="0" width="${size}" height="${size}" viewBox="${qrViewBox}">
    ${qrInner}
  </svg>

  <rect x="${padX}" y="${padY}"
        width="${padSize}" height="${padSize}"
        rx="${padRadius}" ry="${padRadius}"
        fill="${CONFIG.lightColor}"/>

  <image href="data:image/png;base64,${doorBase64}"
         x="${iconX}" y="${iconY}"
         width="${iconSize}" height="${iconSize}"
         preserveAspectRatio="xMidYMid meet"/>
</svg>
`
}

async function compositeQrPng(doorBuffer) {
  const qrBuffer = await QRCode.toBuffer(CONFIG.url, {
    type: "png",
    errorCorrectionLevel: CONFIG.errorCorrectionLevel,
    margin: CONFIG.margin,
    width: CONFIG.qrSize,
    color: {
      dark: CONFIG.darkColor,
      light: CONFIG.lightColor,
    },
  })

  const { iconSize, padSize, padX, padY, padRadius } = iconLayout()

  const paddedIcon = await sharp(doorBuffer)
    .resize(iconSize, iconSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  const padSvg = Buffer.from(`
    <svg width="${padSize}" height="${padSize}">
      <rect width="${padSize}" height="${padSize}" rx="${padRadius}" ry="${padRadius}" fill="${CONFIG.lightColor}"/>
    </svg>
  `)

  const padBuffer = await sharp(padSvg).png().toBuffer()

  return sharp(qrBuffer)
    .composite([
      { input: padBuffer, left: padX, top: padY },
      {
        input: paddedIcon,
        left: Math.round(CONFIG.qrSize / 2 - iconSize / 2),
        top: Math.round(CONFIG.qrSize / 2 - iconSize / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer()
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log("Generating Vecina Digital QR…")
  console.log(`URL: ${CONFIG.url}`)

  await ensureOutputDir()

  const doorBuffer = await fs.readFile(CONFIG.doorPath)
  const doorBase64 = doorBuffer.toString("base64")

  const qrSvg = await generateQrSvgString()
  const { viewBox, inner } = extractQrSvgParts(qrSvg)
  const compositeSvg = buildCompositeSvg({
    qrInner: inner,
    qrViewBox: viewBox,
    doorBase64,
  })

  const svgPath = path.join(CONFIG.outputDir, CONFIG.svgFile)
  const pngPath = path.join(CONFIG.outputDir, CONFIG.pngFile)

  await fs.writeFile(svgPath, compositeSvg, "utf8")

  const pngBuffer = await compositeQrPng(doorBuffer)
  await fs.writeFile(pngPath, pngBuffer)

  console.log("")
  console.log("Done. Files saved to:")
  console.log(`  ${svgPath}`)
  console.log(`  ${pngPath}`)
  console.log("")
  console.log("To change the destination URL, edit CONFIG.url in monscripts/generate-qr.js")
}

main().catch((error) => {
  console.error("QR generation failed:", error)
  process.exit(1)
})
