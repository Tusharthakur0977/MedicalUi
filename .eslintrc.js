module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  rules: {
    'prettier/prettier': 'on',
    'react/no-unstable-nested-components': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
