/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'lucide-react$': require.resolve('lucide-react/dist/cjs/lucide-react.js'),
    };

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  // No trailing slash for better Firebase hosting compatibility
  trailingSlash: false,
}

module.exports = nextConfig 
