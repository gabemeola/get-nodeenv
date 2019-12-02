const getNodeEnv = require('./index.cjs')

afterEach(() => {
  delete process.env.NODE_ENV;
})

it('should return set env', () => {
  process.env.NODE_ENV = 'dev-mode';
  expect(getNodeEnv()).toBe('dev-mode');
})

it('should default to production', () => {
  expect(getNodeEnv()).toBe('production')
  expect(process.env.NODE_ENV).toBe('production')
})

it('should set NODE_ENV to arg', () => {
  expect(getNodeEnv('super-test')).toBe('super-test')
  expect(process.env.NODE_ENV).toBe('super-test')
})