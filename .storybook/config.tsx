/**
 * Main App
 */
import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

declare global {
  interface Window {
    _StorybookBootstrap: any;
  }
}

const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

// Option defaults.
addParameters({
  options: {
    name: 'App',
    theme: themes.dark,
  },
});

configure(loadStories, module);
