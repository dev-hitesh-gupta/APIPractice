const components = require('../index')
const defaultPage = require('./default')
const basePath = '/api';

console.log('routes index.js');

module.exports = (app) => {
  //latest apis
  //app.use('/', defaultPage)
  app.use(basePath+'/users',components.users.router)
    
}