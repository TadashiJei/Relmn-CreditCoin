import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ["hls.js"],
  webpack: (config) => {
    // Avoid bundling hls.js pulled indirectly by @react-three/drei index re-exports
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Map deep import and module name to a local no-op to avoid parser errors
      "hls.js/dist/hls.mjs": path.resolve(process.cwd(), "lib/empty.js"),
      "hls.js$": path.resolve(process.cwd(), "lib/empty.js"),
    };
    return config;
  },
};

export default nextConfig;
