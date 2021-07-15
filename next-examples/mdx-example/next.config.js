const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const withLinaria = require('next-linaria');

module.exports = withLinaria(withMDX({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
}));
