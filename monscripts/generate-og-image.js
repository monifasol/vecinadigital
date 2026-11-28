/**
 * Tarjeta Open Graph 1200×630: papel, logo horizontal centrado y claim.
 *
 * Desde la raíz del proyecto:
 *   npm run generate-og-image
 */

const fs = require("fs/promises")
const path = require("path")
const sharp = require("sharp")

const ROOT = path.join(__dirname, "..")
const SOURCE = path.join(ROOT, "public/assets/identidad-vecina-digital-acuarela")
const OUT_DIR = path.join(ROOT, "public/assets/og")
const OUT_FILE = path.join(OUT_DIR, "vecina-digital-og.png")

const WIDTH = 1200
const HEIGHT = 630
const PAPER = { r: 246, g: 241, b: 232, alpha: 1 }
const TAGLINE = "Presencia digital humana y cercana"
const TAGLINE_WIDTH = 720
const TAGLINE_HEIGHT = 48

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true })

  const backdrop = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
      <defs>
        <linearGradient id="wash" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e6b59b" stop-opacity="0.28"/>
          <stop offset="45%" stop-color="#f6f1e8" stop-opacity="0"/>
          <stop offset="100%" stop-color="#e3e8dc" stop-opacity="0.45"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#f6f1e8"/>
      <rect width="100%" height="100%" fill="url(#wash)"/>
    </svg>
  `)

  const logo = await sharp(path.join(SOURCE, "logo-vecina-digital-horizontal.png"))
    .resize({ width: 760, withoutEnlargement: true })
    .png()
    .toBuffer()

  const logoMeta = await sharp(logo).metadata()
  const stackGap = 18
  const stackHeight = logoMeta.height + stackGap + TAGLINE_HEIGHT
  const stackTop = Math.round((HEIGHT - stackHeight) / 2)
  const logoLeft = Math.round((WIDTH - logoMeta.width) / 2)
  const logoTop = stackTop

  const tagline = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${TAGLINE_WIDTH}" height="${TAGLINE_HEIGHT}">
      <text
        x="50%"
        y="30"
        text-anchor="middle"
        font-family="Georgia, 'Iowan Old Style', 'Palatino Linotype', Palatino, serif"
        font-size="28"
        fill="#2b2622"
        fill-opacity="0.72"
      >${TAGLINE}</text>
    </svg>
  `)

  await sharp({
    create: {
      width: WIDTH,
      height: HEIGHT,
      channels: 4,
      background: PAPER,
    },
  })
    .composite([
      { input: backdrop, left: 0, top: 0 },
      { input: logo, left: logoLeft, top: logoTop },
      {
        input: tagline,
        left: Math.round((WIDTH - TAGLINE_WIDTH) / 2),
        top: logoTop + logoMeta.height + stackGap,
      },
    ])
    .png({ compressionLevel: 9 })
    .toFile(OUT_FILE)

  const { size } = await fs.stat(OUT_FILE)
  console.log(
    `vecina-digital-og.png  ${WIDTH}×${HEIGHT}  ${Math.round(size / 1024)} KB`
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
