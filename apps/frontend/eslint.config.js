import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['.next', 'dist', 'node_modules', 'out'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser, 
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'jsx-quotes': ['error', 'prefer-single'],
      'indent': ['error', 2],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'keyword-spacing': ['error', { before: true, after: true }],
      
      '@typescript-eslint/no-unused-vars': [
        'error',
        { 
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
  {
    files: ['pages/api/**/*.{ts,js}', 'app/api/**/*.{ts,js}'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    files: ['*.config.{js,ts}', '*.config.*.{js,ts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
);