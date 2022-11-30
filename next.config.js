/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    A2IMCMS_API_URL: process.env.A2IMCMS_API_URL,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
