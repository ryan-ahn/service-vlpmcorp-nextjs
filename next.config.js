require('dotenv').config();
const withFonts = require('next-fonts');

module.exports = withFonts({
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
});
