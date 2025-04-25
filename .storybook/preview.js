import React from 'react';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1A1A1A' }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div data-theme="light" className="theme-provider" style={{ padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
