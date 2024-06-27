import path from 'node:path'
import { fileURLToPath } from 'node:url'
import globals from 'globals'
import eslint from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import jest from 'eslint-plugin-jest'
import prettier from 'eslint-config-prettier'
import next from '@next/eslint-plugin-next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: eslint.configs.recommended,
  allConfig: eslint.configs.all
})

export default tseslint.config(
  {
    ignores: [
      '.env',
      '.gitignore',
      'node_modules',
      'coverage/',
      'logs/',
      'web/.next/',
      'web/node_modules/',
      'web/public/',
      'api/dist',
      'api/node_modules/'
    ]
  },
  {
    files: ['web/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    extends: [
      ...compat.extends('airbnb', 'airbnb/hooks', 'airbnb-typescript'),
      ...compat.extends('plugin:@next/next/core-web-vitals'),
      ...tseslint.configs.recommended,
      eslint.configs.recommended,
      jest.configs['flat/recommended'],
      ...compat.extends(
        'plugin:import/recommended',
        'plugin:import/typescript'
      ),
      ...compat.extends(
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime'
      ),
      prettier
    ],
    languageOptions: {
      ...reactRecommended.languageOptions,
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './web/tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      next
    },
    settings: {
      react: {
        version: '18.3.1'
      },
      next: {
        rootDir: './web'
      }
    },
    rules: {
      ...jest.configs['flat/recommended'].rules,
      'react/react-in-jsx-scope': 'off'
    }
  },
  // BACKEND
  {
    files: ['api/**/*.{js,mjs,cjs,ts}'],
    extends: [
      ...compat.extends('airbnb-base', 'airbnb-typescript/base'),
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      jest.configs['flat/recommended'],
      ...compat.extends(
        'plugin:import/recommended',
        'plugin:import/typescript'
      ),
      prettier
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './api/tsconfig.json'
      },
      globals: globals.node
    },
    rules: {
      ...jest.configs['flat/recommended'].rules
    }
  }
)
