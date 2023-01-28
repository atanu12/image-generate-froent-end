/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true
  },
  env:{
    OPENAI_API_KEY: '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',
  }
  
}

module.exports = nextConfig
