const Models = require('../db/models');
const { users } = Models;
const services = {};

try{
    services.getUsers = async () => 
        await users.findAll({ where:{ isDeleted:false } })
    
    services.postUser = async user =>  
        await users.create(user)

    services.deleteHardUser = async id => 
        await users.destroy({ where:{ id } })

    services.deleteSoftUser = async id => 
        await users.update({ isDeleted: true },{ where:{ id } })    

    services.updateUser = async (id,user) => 
        await users.update(user,{ where:{ id } })

} catch(err) {
    console.err('Services: ',err);
}

module.exports = services;
