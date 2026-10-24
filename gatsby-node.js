/* eslint-env node */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /node_modules[\\/]leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
