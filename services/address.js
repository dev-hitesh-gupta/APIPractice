const Models = require('../server/models');
const { addresses } = Models;
const services = {};

try {
    services.getAddresses = async ( userId ) => 
        await addresses.findAll({ where:{ userId } })

    services.postAddress = async address =>  
        await addresses.create(address)

    services.deleteAddress = async id => 
        await addresses.destroy({ where:{ id }})

    services.updateAddress = async ( id, address ) => 
        await addresses.update( address, { where:{ id }})

} catch(err) {
    console.error(err);
}
module.exports = services;
