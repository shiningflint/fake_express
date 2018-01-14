'use strict'

const app = module.exports = {}

app.init = function init() {
  this.cache = {}
  this.engines = {}
  this.settings = {}

  this.defaultConfiguration()
}

app.defaultConfiguration = function defaultConfiguration() {
  const env = process.env.NODE_ENV || 'development'

  // default settings
  this.enable('x-powered-by')
  this.set('etag', 'weak')
  this.set('env', env)
  this.set('query parser', 'extended')
  this.set('subdomain offset', 2)
  this.set('trust proxy', false)
}

app.enable = function enable(setting) {
  return this.set(setting, true);
}
