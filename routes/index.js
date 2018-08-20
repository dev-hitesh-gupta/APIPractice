const users = require('./users')
const defaultPage = require('./default')

module.exports = (app) => {
  //latest apis
  app.use('/', defaultPage)
  app.use('/users', users)
  //v1 apis
  app.use('/v1/users', users)
  
}