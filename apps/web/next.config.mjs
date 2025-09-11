import  { NextConfig } from "next";

const nextConfig = {
  /* config options here */
 allowedDevOrigins: ["192.168.1.15"],
 async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
