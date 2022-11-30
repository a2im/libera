/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  }
]
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
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
