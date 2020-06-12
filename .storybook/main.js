const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register'
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};