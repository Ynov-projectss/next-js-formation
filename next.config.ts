import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ["mdx", "tsx", "ts"],
  redirects() {
    return [
      {
        source: "/websites/test",
        destination: "/websites/oskaprod",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX();
export default withMDX(nextConfig);
