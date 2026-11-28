export const SITE_NAME = "Vecina Digital"
export const SITE_URL = "https://www.vecinadigital.com"
export const SITE_DESCRIPTION =
  "Para que tu negocio se vea tan bien como lo cuidas cada día. Webs claras y humanas para pequeños negocios."

export const DEFAULT_OG_IMAGE = {
  url: "/assets/og/vecina-digital-og.png",
  width: 1200,
  height: 630,
  alt: "Vecina Digital",
}

/**
 * Metadata completa para compartir: title, description, canonical, Open Graph y Twitter.
 * Una sola fuente de verdad por página.
 */
export function buildPageMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  robots,
} = {}) {
  if (!title) {
    throw new Error("buildPageMetadata requires a title")
  }

  const canonicalPath = path.startsWith("/") ? path : `/${path}`
  const ogImage = {
    url: image.url,
    width: image.width ?? DEFAULT_OG_IMAGE.width,
    height: image.height ?? DEFAULT_OG_IMAGE.height,
    alt: image.alt ?? title,
  }

  return {
    title,
    description,
    ...(robots ? { robots } : {}),
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  }
}
