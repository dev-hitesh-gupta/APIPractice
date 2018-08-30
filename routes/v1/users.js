
var express = require('express');
var router = express.Router();
var userService = require('../../services/users');
var addressService = require('../../services/address');

router.get('/', async (req, res, next) => {
  var data = await userService.getUsers();
  if (data) return await res.status(200).send({
    data
  });
});

router.post('/', async (req, res) => {
  const values = req.body;
  let user = {};
  for (value in values) {
    if (values[value])
      user[value] = values[value];
  }
  var data = await userService.postUser(user);
  return await res.status(202).send({
    data
  });
});

router.delete('/:id', async (req, res) => {
  var data = await userService.deleteHardUser(req.params.id);
  return await res.status(200).send({
    data
  });
})

router.put('/:id', async (req, res) => {
  var data = await userService.updateUser(req.params.id, user)
  return await res.status(200).send({
    data
  });
})

router.get('/:userid/addresses', async (req, res, next) => {
  var data = await addressService.getAddresses(req.params.userid);
  return await res.status(200).send({
    data
  });
});

router.post('/:userid/addresses', async (req, res) => {
  const values = req.body;
  let addressData = {};
  for (value in values) {
    if (values[value])
      addressData[value] = values[value];
  }
  addressData['userId'] = req.params.userid;
  var data = await addressService.postAddress(addressData);
  return await res.status(202).send({
    data
  });
});

router.delete('/:userid/addresses/:id', async (req, res) => {
  var data = await addressService.deleteHardAddress(req.params.id);
  return await res.status(200).send({
    data
  });
})

router.put('/:userid/addresses/:id', async (req, res) => {
  const values = req.body;
  let addressData = {};
  for (value in values) {
    if (values[value])
      addressData[value] = values[value];
  }
  var data = await addressService.updateAddress(req.params.id, addressData)
  return await res.status(200).send({
    data
  });
})

module.exports = router;