
const express = require('express');
const userService = require('./service');

class UserV1 {
  
  constructor(){
    this.router = express.Router();
    this.router.get('/', async (req, res) => await this.getUsers(req, res));
    this.router.post('/', async (req, res) => await this.postUser(req, res));    
    this.router.delete('/:id', async (req, res) => await this.deleteUser(req, res));
    this.router.put('/:id', async (req, res) => await this.putUser(req, res));
    
  }

  async postUser(req, res){
      let values = req.body;
      let user = {};
      for (let value in values) {
        if (values[value])
          user[value] = values[value];
      }
      var data = await userService.postUser(user);
      return await res.status(202).send({
        data
      });
    }
    
    async putUser(req, res){
      let values = req.body;
      let user = {};
      for (let value in values) {
        if (values[value])
          user[value] = values[value];
      }
      var data = await userService.updateUser(req.param.id,user);
      return await res.status(200).send({
        data
      });
    }

    async deleteUser(req, res) {
      var data = await userService.deleteHardUser(req.params.id);
      return await res.status(200).send({
        data
    });
    }
  
    
    // router.put('/:id', async (req, res) => {
    //   var data = await userService.updateUser(req.params.id, user)
    //   return await res.status(200).send({
    //     data
    //   });
    // })
    
    // router.get('/:userid/addresses', async (req, res, next) => {
    //   var data = await addressService.getAddresses(req.params.userid);
    //   return await res.status(200).send({
    //     data
    //   });
    // });
    
    // router.post('/:userid/addresses', async (req, res) => {
    //   const values = req.body;
    //   let addressData = {};
    //   for (value in values) {
    //     if (values[value])
    //       addressData[value] = values[value];
    //   }
    //   addressData['userId'] = req.params.userid;
    //   var data = await addressService.postAddress(addressData);
    //   return await res.status(202).send({
    //     data
    //   });
    // });
    
    // router.delete('/:userid/addresses/:id', async (req, res) => {
    //   var data = await addressService.deleteHardAddress(req.params.id);
    //   return await res.status(200).send({
    //     data
    //   });
    // })
    
    // router.put('/:userid/addresses/:id', async (req, res) => {
    //   const values = req.body;
    //   let addressData = {};
    //   for (value in values) {
    //     if (values[value])
    //       addressData[value] = values[value];
    //   }
    //   var data = await addressService.updateAddress(req.params.id, addressData)
    //   return await res.status(200).send({
    //     data
    //   });
    // })

  async getUsers(req, res){
      var data = await userService.getUsers();
      console.error(req.path);
      if (data) return await res.status(200).send({
        data,
        version:1
      });
  }
}


module.exports = UserV1;