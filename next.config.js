/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'src', 'styles')],
  }
}

module.exports = nextConfig
