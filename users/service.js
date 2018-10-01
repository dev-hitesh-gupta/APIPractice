const users = require('./users');
// const addresses = require('./addresses');
// const db = require('../db');
const services = {};

// users.hasMany(addresses, { foreignKey: 'userId' }); 
// addresses.belongsTo(users, { foreignKey: 'userId' });

services.getUsers = async () => await users.findAll(
    // { include: [addresses] }
    );



services.getUser = async id => await users.findOne(
    { where: { id }
    // , include: [addresses] 
    }
    )


services.postUser = async (user, per_address, cor_address) => {
    // return db.sequelize.transaction(transaction => {
    //     return User.create(user, { transaction })
    //         .then(user => { 
    //             per_address.userId = user.id;
    //             let addrs = [per_address];
    //             if (cor_address) {
    //                 cor_address.userId = user.id;
    //                 addrs.push(cor_address);
    //             }
    //             addresses.bulkCreate(addrs, { transaction })
    //                 .then(addrs => {
    //                     user['addresses'] = addrs;
    //                     return user;
    //                 })
    //                 .catch(err => {
    //                     throw err;
    //                 })
    //         })
    //         .catch(err => {
    //             throw err;
    //         })

    // }).then(user => {
    //     return user;
    // }).catch(err => {
    //     throw err;
    // });
    return users.create(user);
}

services.updateUser = async (id, user) =>
    await users.update(user, { where: { id } })



services.deleteHardUser = async id =>
    await users.destroy({
        where: { id },
        force: true
    });

services.deleteSoftUser = async id =>
    await users.destroy({ where: { id } });



module.exports = services;
