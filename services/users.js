const Models = require('../db/models');
const { users } = Models;
const services = {};

    services.getUsers = async () => {
        return await users.findAll({ where:{ isDeleted:false } })

    }    

    services.getUser = async id => {
        return await users.findAll({ where:{ isDeleted:false } })

    }

    services.postUser = async user =>  {
        return await users.create(user).catch(err => console.log('Error: ',err))
    }
    services.deleteHardUser = async id => 
        await users.destroy({ where:{ id } })

    services.deleteSoftUser = async id => 
        await users.update({ isDeleted: true },{ where:{ id } })    

    services.updateUser = async (id,user) => 
        await users.update(user,{ where:{ id } })


module.exports = services;
