export default {
  title: 'MUI Form Fields',
  codeSandbox: false,
  typescript: true,
  menu: ['Getting Started', 'Components'],
  themeConfig: {
    showPlaygroundEditor: true,
  },
  filterComponents: files =>
    files.filter(filepath => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    },
  },
};
