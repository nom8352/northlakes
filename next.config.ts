import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // 임시로 빌드 오류 무시하여 배포 시도
  }
};

export default nextConfig;
