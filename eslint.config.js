const react = require('eslint-plugin-react');
const tailwind = require('eslint-plugin-tailwindcss');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: ['rich-text'],
        },
      ],
    },
  },
  ...tailwind.configs['flat/recommended'],
];
