import wp from '@cypress/webpack-preprocessor';
import path from 'path';

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
};

module.exports = (on) => {
  on('file:preprocessor', wp({ webpackOptions }));
};

// https://github.com/avanslaars/cypress-axe#in-cypress-plugins-file
module.exports = (on) => {
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    },
  });
};
