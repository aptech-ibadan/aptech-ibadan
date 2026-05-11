/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
             },
        {
        protocol: 'https',
        hostname: 'res-console.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', 
        pathname: '/**',
      },
    
    ],
  },
  // Other Next.js config options...
};

export default nextConfig;
