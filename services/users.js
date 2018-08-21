const db = require('../db')
const sql = require('../utils/sqlengine');
const users = {};

users.getUser = async () => await db.query('SELECT * FROM users ')
                                    .catch(err => {
                                      console.error("ERROR: "+err);
                                    });

users.postUser = async user =>  await db.query(sql.insert('users',user))
                                        .catch(err => {
                                          console.error("ERROR: "+err);
                                        });

users.deleteUser = async id => await db.query(sql.delete('users',id))
                                        .catch(err => {
                                          console.error("ERROR: "+err);
                                        });

users.updateUser = async (id,user) => await db.query(sql.update('users',id,user))
                                              .catch(err => {
                                                console.error("ERROR: "+err);
                                              });

module.exports = users;
