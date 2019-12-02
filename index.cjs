/**
 * Gets the NODE_ENV from process.env.NODE_ENV.
 * Sets the NODE_ENV to the defaultEnv if unset.
 * 
 * @param {(string|null)} [defaultEnv=production] - Set's process.env.NODE_ENV to this value if env is undefined. Defaults to "production"
 * @returns {string}
 */
function getNodeEnv(defaultEnv = 'production') {
  const env = process.env.NODE_ENV;
  if (typeof env === 'undefined') {
    process.env.NODE_ENV = defaultEnv;
    return defaultEnv;
  }

  return env;
}

module.exports = getNodeEnv;