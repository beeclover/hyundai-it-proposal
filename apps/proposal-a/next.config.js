/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: process.env.NODE_ENV !== 'development' ? '/proposal-a' : '',
};

module.exports = nextConfig;
