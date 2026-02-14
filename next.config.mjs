import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // look for .svg files
      issuer: /\.[jt]sx?$/, // apply only in .js/.ts/.jsx/.tsx files
      use: [require.resolve("@svgr/webpack")], // use SVGR to treat SVGs as React components
    });
    return config;
  },
};

export default nextConfig;
