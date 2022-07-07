/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { dev }) {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
    });
    return config;
  },
  images: {
    domains: ['i.scdn.co'],
  },
};

module.exports = nextConfig;
