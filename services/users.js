const Models = require('../db/models');
const { users } = Models;
const services = {};

try{
    services.getUsers = async () => 
        await users.findAll()
    
    services.postUser = async user =>  
        await users.create(user)

    services.deleteUser = async id => 
        await users.destroy({ where:{ id } })

    services.updateUser = async (id,user) => 
        await users.update(user,{ where:{ id } })

} catch(err) {
    console.err('Services: ',err);
}

module.exports = services;
