/** @type {import('next').NextConfig} */
const nextConfig = {"headers": [
  {
    "source": "/api/:path*",
    "headers": [
      {
        "key": "Access-Control-Allow-Origin",
        "value": "*",
      },
    ],
  },
],};

export default nextConfig;
