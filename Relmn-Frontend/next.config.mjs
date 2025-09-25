import path from "path"
/** @type {import('next').NextConfig} */
const nextConfig = {
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
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "hls.js/dist/hls.mjs": path.resolve(process.cwd(), "lib/empty.js"),
      "hls.js$": path.resolve(process.cwd(), "lib/empty.js"),
    }
    return config
  },
}

export default nextConfig
