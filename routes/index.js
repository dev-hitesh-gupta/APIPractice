const users = require('./users')
const defaultPage = require('./default')

module.exports = (app) => {
  app.use('/users', users)
  app.use('/v1/users', users)
  app.use('/', defaultPage)
}