/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    cleanDistDir: true, // 削除したファイルのキャッシュを防ぐ
  },
};

module.exports = nextConfig;
