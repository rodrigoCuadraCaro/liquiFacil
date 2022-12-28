/** @type {import('next').NextConfig} */
module.exports={
  reactStrictMode: false,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  }
}
