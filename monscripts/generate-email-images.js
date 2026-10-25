/**
 * Versiones pequeñas de la acuarela para incrustar en el correo.
 * El formulario las lee y las manda a Forward Email como contenido en base64.
 *
 * Desde la raíz del proyecto:
 *   npm run generate-email-images
 */

const fs = require("fs/promises")
const path = require("path")
const sharp = require("sharp")

const ROOT = path.join(__dirname, "..")
const SOURCE = path.join(ROOT, "public/assets/identidad-vecina-digital-acuarela")
const OUT = path.join(ROOT, "public/assets/email")

/** Ancho en px a 2× del tamaño al que se muestran en el HTML del correo. */
const IMAGES = [
  {
    source: "logo-vecina-digital-horizontal.png",
    output: "logo-vecina-digital-email.png",
    width: 800,
  },
  {
    source: "casa-acuarela.png",
    output: "casa-acuarela-email.png",
    width: 280,
  },
]

async function main() {
  await fs.mkdir(OUT, { recursive: true })

  for (const image of IMAGES) {
    const destination = path.join(OUT, image.output)
    await sharp(path.join(SOURCE, image.source))
      .resize({ width: image.width, withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true, quality: 80, colors: 128 })
      .toFile(destination)

    const { size } = await fs.stat(destination)
    console.log(`${image.output}  ${image.width}px  ${Math.round(size / 1024)} KB`)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
