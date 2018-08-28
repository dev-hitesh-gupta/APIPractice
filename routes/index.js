const users_v1 = require('./v1/users')
//const users_v2 = require('./v2/users')
const defaultPage = require('./default')

module.exports = (app) => {
  //latest apis
  app.use('/', defaultPage)
  //app.use('/users', users_v2)
  app.use('/users', users_v1)
  //v2 apis
  //app.use('/v2/users', users_v2)
  //app.use('/v2/users', users_v1)
  //v1 apis
  app.use('/v1/users', users_v1)
  
}