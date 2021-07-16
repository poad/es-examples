const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
// const withLinaria = require('next-linaria');

module.exports = withMDX({
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  webpack: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: '@sucrase/webpack-loader',
          options: {
            transforms: ['jsx', 'typescript', 'imports', 'react-hot-loader']
          }
        }
      }
    ]
  },
});
