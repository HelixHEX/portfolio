/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'download.mc-quadrat.com'
    }]
  }
}

module.exports = nextConfig
