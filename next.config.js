/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com",
              "thumbs.dreamstime.com",
              "miro.medium.com",
              "lh3.googleusercontent.com",
  ]
    
  }
}

module.exports = nextConfig
