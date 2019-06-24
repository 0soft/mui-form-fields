const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('babel-plugin-typescript-to-proptypes');
}

module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins,
};
