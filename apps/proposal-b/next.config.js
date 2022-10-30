/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  basePath: process.env.NODE_ENV !== 'development' ? '/proposal-b' : '',
};

module.exports = nextConfig;
