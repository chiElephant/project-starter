import type { Config } from '@jest/types'
import nextJest from '../web/node_modules/next/jest.js'

const createJestConfig = nextJest({
  dir: './web'
})

const config: Config.InitialOptions = {
  automock: false,
  bail: 2,
  clearMocks: false,
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: -10 }
  },
  notify: true,
  notifyMode: 'always',
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['ts-jest', { useEsm: true }]
  },
  resetMocks: false,
  resetModules: false,
  restoreMocks: false,
  verbose: true,
  projects: [
    {
      displayName: {
        name: 'api',
        color: 'blue'
      },
      rootDir: './api',
      testEnvironment: 'node',
      preset: 'ts-jest',
      testMatch: [
        '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/**/?(*.)+(spec|test).[tj]s?(x)'
      ]
    },
    {
      displayName: {
        name: 'web',
        color: 'magenta'
      },
      rootDir: './web',
      testEnvironment: 'jest-environment-jsdom',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/web/src/$1'
      },
      testMatch: [
        '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/**/?(*.)+(spec|test).[tj]s?(x)'
      ],
      testPathIgnorePatterns: ['/node_modules/', '/.next/', '/public/']
    }
  ]
}

export default createJestConfig(config)
