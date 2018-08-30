var express = require('express');
var router = express.Router();
var userService = require('../../services/users');
var addressService = require('../../services/address');

router.delete('/:id', async (req, res) => {
  var data = await userService.deleteSoftUser(req.params.id);
  return await res.status(200).send({
    data
  });
})

router.delete('/:userid/addresses/:id', async (req, res) => {
  var data = await addressService.deleteSoftAddress(req.params.id);
  return await res.status(200).send({
    data
  });
})

module.exports = router;