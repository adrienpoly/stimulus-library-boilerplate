module.exports = {
  env: {
    test: {
      plugins: [
        [
          "istanbul",
          {
            exclude: ["spec/**/*.js"]
          }
        ]
      ]
    }
  },
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-classes"
  ]
};
