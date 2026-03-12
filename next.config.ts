import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // 정적 HTML 내보내기 활성화
  images: {
    unoptimized: true, // 정적 내보내기 시 이미지 최적화 비활성화 필요
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
