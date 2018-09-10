// var express = require('express');
// var router = express.Router();
// var userService = require('../../services/users');
// var addressService = require('../../services/address');



// router.delete('/:userid/addresses/:id', async (req, res) => {
//   var data = await addressService.deleteSoftAddress(req.params.id);
//   return await res.status(200).send({
//     data
//   });
// })

// module.exports = router;

const express = require('express');
const userService = require('../../services/users');
const addressService = require('../../services/address');
const UserV1 = require('../v1/users');

class UserV2  extends UserV1 {
  
  constructor(){
    super();
    this.router.get('/', async (req, res) => this.getUsers(req, res));
    this.router.delete('/:id', async (req, res)=> this.deleteUser(req, res));
  }

  async getUsers(req, res){
      var data = await userService.getUsers();
      if (data) return await res.status(200).send({
        data,
        version: 2
      });
  }

  async deleteUser (req, res) {
    var data = await userService.deleteSoftUser(req.params.id);
    return await res.status(200).send({
      data
    });
  }
}


module.exports = UserV2;