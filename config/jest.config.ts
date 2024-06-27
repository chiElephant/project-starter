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
  coverageProvider: 'v8',
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: -10 }
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  notify: true,
  notifyMode: 'always',
  testMatch: [
    '<rootDir>/**/__tests__/**/*.[jt]s?(x)',
    '<rootDir>/**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  projects: [
    {
      displayName: {
        name: 'api',
        color: 'blue'
      },
      rootDir: './api',
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
  verbose: true
}

export default createJestConfig(config)
