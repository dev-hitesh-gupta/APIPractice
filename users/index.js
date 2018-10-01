const v1 = require('./ctrl.1.js');
const v2 = require('./ctrl.2.js');
const express = require('express');
console.log(new v2().router);
//specify routes here
let router = express.Router();
router.use('/',new v2().router);
router.use('/v1',new v1().router);
router.use('/v2',new v2().router);
  
module.exports = {
    router
}