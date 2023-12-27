import path from 'path'
import type { Configuration } from 'webpack';
// eslint-disable-next-line import/default
import HtmlWebpackPlugin from 'html-webpack-plugin'

export const rendererConfig: Configuration = {
  entry: './src/webapp/main.tsx',
  // Put your normal webpack config below here
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.webapp.json'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my page'
    }),],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  output: {
    filename: '/renderer/renderer.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

export const rendererEntryPoints = [
  {
    html: './public/index.html',
    js: './src/webapp/main.tsx',
    name: 'main_window',
    preload: {
      js: './src/preload/preload.ts',
    },
  },]
