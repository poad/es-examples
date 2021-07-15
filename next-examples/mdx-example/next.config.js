const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
// const withLinaria = require('next-linaria');

module.exports = withMDX({
  reactStrictMode: false,
  pageExtensions: ['ts', 'tsx', 'mdx'],
});
