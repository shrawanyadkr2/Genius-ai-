/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "googleusercontent.com",
//       "oaidalleapiprodscus.blob.core.windows.net",
//       "replicate.delivery"
//     ]
//   },
// }

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'replicate.delivery',
        port: '',
        pathname: '/pbxt/**',
      },
    ],
  },
}
