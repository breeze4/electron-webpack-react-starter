import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};

export const rendererEntryPoints = [
  {
    html: './src/index.html',
    js: './src/renderer.ts', // TODO: change this!
    name: 'main_window',
    preload: {
      js: './src/preload/preload.ts',
    },
  },]
