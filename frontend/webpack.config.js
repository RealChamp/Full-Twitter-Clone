const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const smp = new SpeedMeasurePlugin();

const optimization = () => {
  const config = {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
    },
  };
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin({
        extractComments: false,
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ];
  }

  return config;
};

const getStyleLoaders = (options) => {
  const loaders = [
    isDev
      ? 'style-loader'
      : {
          loader: MiniCssExtractPlugin.loader,
        },
    'cache-loader',
    {
      loader: 'css-loader',
      options: options,
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['autoprefixer'],
        },
      },
    },
    'sass-loader',
  ];
  return loaders;
};

module.exports = smp.wrap({
  devtool: isDev && 'eval-cheap-module-source-map',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      inject: true,
      cleanStaleWebpackAssets: false,
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd,
      },
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'dist') }],
    // }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getStyleLoaders({
          importLoaders: 3,
        }),
      },
      {
        test: sassModuleRegex,
        use: getStyleLoaders({
          importLoaders: 3,
          modules: true,
        }),
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: getStyleLoaders({
          importLoaders: 1,
        }),
      },
      {
        test: cssModuleRegex,
        use: getStyleLoaders({
          modules: true,
        }),
      },
      {
        test: /\.(js|jsx)/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: [
                      'last 1 chrome version',
                      'last 1 safari version',
                      'last 1 firefox version',
                    ].join(', '),
                  },
                ],
                '@babel/preset-react',
              ],
            },
          },
          {
            loader: 'eslint-loader',
            /* options: {
              cache: true
            } */
          },
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(ts|tsx)/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'cache-loader',
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      {
        test: /\.(png|jpe?g|svg|gif|ttf|woff|woff2|svg)/,
        use: ['cache-loader', 'file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  optimization: optimization(),
  devServer: {
    publicPath: '/',
    port: 3000,
    hot: isDev,
    historyApiFallback: true,
  },
});
