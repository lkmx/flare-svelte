const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  webpackFinal: async  (config) => {
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader"),
    );
    svelteLoader.options.preprocess = require("svelte-preprocess")({});
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    return config
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf",
    "@storybook/preset-scss"
  ]
}