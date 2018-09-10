const users = require('../components/users/index.js')
const defaultPage = require('./default')
const basePath = '/api';
module.exports = (app) => {
  //latest apis
  app.use('/', defaultPage)
  app.use(basePath+'/v1/users',new users.v1().router)
  app.use(basePath+'/v2/users',new users.v2().router)
  // app.use('/users', users_v2)
  // app.use('/users', users_v1)
  // //v2 apis
  // app.use('/v2/users', users_v2)
  // app.use('/v2/users', users_v1)
  // //v1 apis
  // app.use('/v1/users', users_v1)

  // let paths = {};
  // fs
  //   .readdirSync(__dirname)
  //   .filter(version => {
  //     if( version.indexOf('.') == -1 ){
  //       fs.readdirSync(path.join(__dirname,version))
  //       .filter(name => {
  //         name = name.substring(0,name.length-3);
  //         if(!paths[name])
  //           paths[name] = [];
  //         paths[name].push(version);
  //         //console.log(path.join(version,name.substring(0,name.length-3)));
  //       })
  //     }
  //   })
  // for( pathname in paths ){
  //   paths[pathname].reverse()
  //   for(let i = 0; i < paths[pathname].length; i++){
  //     app.use('/'+pathname,require(path.join(__dirname,paths[pathname][i],pathname)));
  //     for(let j = i; j < paths[pathname].length; j++)
  //       app.use('/'+paths[pathname][i]+'/'+pathname,require(path.join(__dirname,paths[pathname][j],pathname)));
  //   }
  // }  
}