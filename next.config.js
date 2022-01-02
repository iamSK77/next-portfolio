/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}
