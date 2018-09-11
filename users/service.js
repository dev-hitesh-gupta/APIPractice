const users = require('./users');

const services = {};

    services.getUsers = async () => {
        return await users.findAll()

    }    

    services.getUser = async id => {
        return await users.findById(id)

    }

    services.postUser = async user =>  {
        return await users.create(user)
    
    
    }



    services.deleteHardUser = async id => 
        await users.destroy({ 
            where:{ id },
            force :true
        })

    services.deleteSoftUser = async id => 
        await users.destroy({ where:{ id } })    

    services.updateUser = async (id,user) => 
        await users.update(user,{ where:{ id } })


module.exports = services;
