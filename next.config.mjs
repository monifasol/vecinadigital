/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sobre",
        destination: "/tu-vecina",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
