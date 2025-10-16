import tseslint from 'typescript-eslint';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginTailwindcss from 'eslint-plugin-tailwindcss';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  // Global ignores
  {
    ignores: ['node_modules', '.output', '.wxt', 'dist'],
  },

  // Base rules for all TypeScript files
  ...tseslint.configs.recommended,

  // React-specific rules
  {
    files: ['**/*.{ts,tsx}'],
    ...eslintPluginReact.configs.flat.recommended,
    settings: {
      react: { version: 'detect' },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      'react-hooks': eslintPluginReactHooks,
    },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },

  // Tailwind CSS rules
  eslintPluginTailwindcss.configs['flat/recommended'],

  // Prettier must be last to override styling
  eslintConfigPrettier,
);
