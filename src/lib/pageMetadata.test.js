import assert from "node:assert/strict"
import test from "node:test"
import {
  DEFAULT_OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  buildPageMetadata,
} from "./pageMetadata.js"

test("buildPageMetadata fills og, twitter and canonical from one source", () => {
  const meta = buildPageMetadata({
    title: "Servicios | Vecina Digital",
    description: "Soluciones digitales para tu negocio.",
    path: "/servicios",
  })

  assert.equal(meta.title, "Servicios | Vecina Digital")
  assert.equal(meta.description, "Soluciones digitales para tu negocio.")
  assert.equal(meta.alternates.canonical, "/servicios")
  assert.equal(meta.openGraph.title, meta.title)
  assert.equal(meta.openGraph.description, meta.description)
  assert.equal(meta.openGraph.url, "/servicios")
  assert.equal(meta.openGraph.siteName, SITE_NAME)
  assert.equal(meta.openGraph.locale, "es_ES")
  assert.equal(meta.openGraph.type, "website")
  assert.deepEqual(meta.openGraph.images, [DEFAULT_OG_IMAGE])
  assert.equal(meta.twitter.card, "summary_large_image")
  assert.equal(meta.twitter.title, meta.title)
  assert.equal(meta.twitter.description, meta.description)
  assert.deepEqual(meta.twitter.images, [DEFAULT_OG_IMAGE.url])
})

test("home uses site description by default and root canonical", () => {
  const meta = buildPageMetadata({
    title: SITE_NAME,
    path: "/",
  })

  assert.equal(meta.description, SITE_DESCRIPTION)
  assert.equal(meta.alternates.canonical, "/")
  assert.equal(meta.openGraph.url, "/")
})

test("robots can be passed through for private pages", () => {
  const meta = buildPageMetadata({
    title: "Vale regalo · Vecina Digital",
    path: "/vale-pagina-sencilla",
    robots: { index: false, follow: false },
  })

  assert.deepEqual(meta.robots, { index: false, follow: false })
})

test("title is required", () => {
  assert.throws(() => buildPageMetadata({ path: "/" }), /title/)
})
