/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-interactions",

    "@storybook/addon-onboarding",
    
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "storybook-addon-designs",

    "@chromatic-com/storybook",
  ],
  
};
export default config;
