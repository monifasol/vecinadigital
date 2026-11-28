/**
 * Tarjeta Open Graph 1200×630: papel, logo horizontal y casa acuarela.
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
    .resize({ width: 520, withoutEnlargement: true })
    .png()
    .toBuffer()

  const logoMeta = await sharp(logo).metadata()
  const logoLeft = 72
  const logoTop = Math.round((HEIGHT - logoMeta.height) / 2) - 24

  const tagline = Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="520" height="48">
      <text
        x="0"
        y="30"
        font-family="Georgia, 'Iowan Old Style', 'Palatino Linotype', Palatino, serif"
        font-size="26"
        fill="#2b2622"
        fill-opacity="0.72"
      >Webs claras y humanas</text>
    </svg>
  `)

  const house = await sharp(path.join(SOURCE, "casa-acuarela.png"))
    .resize({ height: 520, withoutEnlargement: true })
    .png()
    .toBuffer()

  const houseMeta = await sharp(house).metadata()
  const houseLeft = WIDTH - houseMeta.width - 36
  const houseTop = HEIGHT - houseMeta.height + 18

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
      { input: house, left: houseLeft, top: houseTop },
      { input: logo, left: logoLeft, top: logoTop },
      {
        input: tagline,
        left: logoLeft + 8,
        top: logoTop + logoMeta.height + 4,
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
