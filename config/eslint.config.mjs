import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginHooks from 'eslint-plugin-react-hooks'
import configAirbnb from 'eslint-config-airbnb'
import configAirbnbBase from 'eslint-config-airbnb-base'
import configTSairbnb from 'eslint-config-airbnb-typescript'
import configNext from 'eslint-config-next/core-web-vitals.js'
import configPrettier from 'eslint-config-prettier'

export default [
  // Common settings
  {
    ignores: [
      '.env',
      '.gitignore',
      'node_modules',
      'logs/',
      'config/',
      'web/.next/',
      'web/node_modules/',
      'web/public/',
      'api/dist',
      'api/node_modules/'
    ]
  },
  // FRONTEND
  {
    files: ['web/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './web/tsconfig.json'
      },
      globals: globals.browser
    },
    plugins: {
      'react-hooks': pluginHooks,
      react: pluginReact,
      '@typescript-eslint': tseslint,
      'eslint-config-prettier': configPrettier,
      'eslint-config-airbnb': configAirbnb,
      'eslint-config-airbnb-base': configAirbnbBase,
      'eslint-config-airbnb-typescript': configTSairbnb,
      'eslint-config-next': configNext
    },
    settings: {
      react: {
        version: '18.3.1'
      }
    },
    rules: {
      ...configAirbnb.rules,
      ...configTSairbnb.rules,
      ...configNext.rules,
      ...pluginReact.configs.recommended.rules,
      ...configPrettier.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginJs.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off'
    }
  },
  // BACKEND
  {
    files: ['api/**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './api/tsconfig.json'
      },
      globals: globals.node
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
      'eslint-config-prettier': configPrettier
    },
    rules: {
      ...configAirbnbBase.rules,
      ...configTSairbnb.rules,
      ...configPrettier.rules,
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules
    }
  }
]
