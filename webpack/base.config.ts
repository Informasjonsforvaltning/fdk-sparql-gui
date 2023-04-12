import { Configuration, container } from 'webpack';
import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const deps = require('../package.json').dependencies;

const configuration: Configuration = {
  entry: {
    main: './src/entrypoints/main/index.tsx'
  },
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: 'auto',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  optimization: {
    splitChunks: {
      hidePathInfo: true,
      chunks: 'all',
      maxInitialRequests: Infinity,
      maxAsyncRequests: Infinity,
      minSize: 0,
      automaticNameDelimiter: '.',
      cacheGroups: {
        default: false,
        mainVendors: {
          test: ({ resource = '' }: any) => resource.includes('node_modules'),
          name: 'main.vendors',
          filename: '[name].bundle.js',
          chunks: ({ name }) => name === 'main'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, '../babel.config.js')
            }
          },
          {
            loader: 'ts-loader',
            options: {
              configFile: resolve(__dirname, '../tsconfig.json')
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              publicPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        exclude: [resolve(__dirname, '..', 'src', 'images')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/entrypoints/main/index.html',
      filename: 'index.html',
      favicon: './src/images/favicon.ico',
      base: '/',
      chunks: ['main']
    }),
    new container.ModuleFederationPlugin({
      name: 'sparql_gui',
      library: { type: 'var', name: 'sparql_gui' },
      filename: 'remoteEntry.js',
      exposes: {
        './SparqlGui': './src/entrypoints/main/app/index.tsx'
      },
      shared: {
        ...deps,
        react: { singleton: true },
        'react-dom': { singleton: true }
      }
    })
  ]
};

export default configuration;
