import type { Config } from 'jest'
import nextJest from '../web/node_modules/next/jest.js'

const createJestConfig = nextJest({
  dir: './web'
})

const config: Config = {
  automock: false,
  bail: 2,
  clearMocks: false,
  collectCoverage: true,
  coverageDirectory: '../coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: -10 }
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  notify: true,
  notifyMode: 'always',
  preset: 'ts-jest',
  projects: [
    {
      displayName: {
        name: 'api',
        color: 'blue'
      },
      rootDir: './',
      testMatch: [
        '<rootDir>/api/**/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/api/**/?(*.)+(spec|test).[tj]s?(x)'
      ],
      testEnvironment: 'node',
      preset: 'ts-jest',
      testPathIgnorePatterns: ['/node_modules/', '/dist/']
    },
    {
      displayName: {
        name: 'web',
        color: 'magenta'
      },
      rootDir: './web',
      testMatch: [
        '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
        '<rootDir>/**/?(*.)+(spec|test).[tj]s?(x)'
      ],
      testEnvironment: 'jsdom',
      preset: 'ts-jest',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
      moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
      },
      testPathIgnorePatterns: ['/node_modules/', '/.next/', '/public/']
    }
  ],
  resetMocks: false,
  resetModules: false,
  restoreMocks: false,
  testLocationInResults: true,
  verbose: true
}

export default createJestConfig(config)
