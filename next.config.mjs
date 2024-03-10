/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_JWT_SECRET_KEY: "SASJDJFJJ@12KKWDJJDFVFJMr34",
  },
};

export default nextConfig;
