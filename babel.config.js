module.exports = {
    env: {
      test: {
        presets: ["@babel/preset-react", "@babel/preset-env"],
        plugins: ["@babel/plugin-transform-modules-commonjs", "@babel/plugin-transform-react-jsx"]
      }
    }
};  
