/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'http',
        hostname:'127.0.0.1',
        port:'1337',
        pathname:'/uploads/**'
      },{
        protocol:'https',
        hostname:'firebasestorage.googleapis.com'
      },{
        protocol:'https',
        hostname:'picsum.photos'
      }
    ],
  }
}

module.exports = nextConfig
