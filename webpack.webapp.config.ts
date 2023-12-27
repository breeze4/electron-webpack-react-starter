import path from 'path'

// eslint-disable-next-line import/default
import HtmlWebpackPlugin from 'html-webpack-plugin'


export const webappConfig = {
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
  devServer: {
    static: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my page'
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  output: {
    filename: './webapp/webapp.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = webappConfig