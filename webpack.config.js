const path = require('path');
const packageinfo = require("read-pkg-up").sync().package;
const camelCase = require("camelcase");


module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(path.join(__dirname, '.', 'dist')),
    filename: 'mui-form-fields.js',
    library: 'MuiFormFields',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx|ts)?$/,
        use: [
          'babel-loader',
          'awesome-typescript-loader',
          'react-docgen-typescript-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
  },
  externals: Object.keys(packageinfo.peerDependencies).map(k => {
    // Aliases for some specific libs
    const root = {
      moment: "moment",
    }[k] || camelCase(k.replace("@material-ui/", ""), {pascalCase: true});

    return {
      [k]: {
        root: camelCase(k.replace("@material-ui/", ""), {pascalCase: true}),
        amd: k,
        commonjs: k,
        commonjs2: k,
      },
    }
  }),
};
