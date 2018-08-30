const Models = require('../db/models');
const { addresses } = Models;
const services = {};

try {
    services.getAddresses = async ( userId ) => 
        await addresses.findAll({ where:{ userId, isDeleted:false } })

    services.postAddress = async address =>  
        await addresses.create(address)

    services.deleteHardAddress = async id => 
        await addresses.destroy({ where:{ id }})

    services.deleteSoftAddress = async id => 
        await addresses.update({ isDeleted: true },{ where:{ id }})

    services.updateAddress = async ( id, address ) => 
        await addresses.update( address, { where:{ id }})

} catch(err) {
    console.error(err);
}
module.exports = services;
