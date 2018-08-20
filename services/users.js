const db = require('../db')
const sql = require('../utils/sqlengine');
const users = {};

users.getUser = async () => {
  console.log('DEBUG:','i am in getUser');
  const { rows } = await db.query('SELECT * FROM users ');
  console.log('DEBUG:',rows);
  return rows;  
};

users.postUser = async (user) => {
  //const { rows } = await db.query(' INSERT INTO USERS (NAME,EMAIL,PASSWORD,PHONE) VALUES ( $1 , $2 , $3 , $4 )', [user.name,user.email,user.password,user.phone]);
  // return rows;
  const { rows } = await db.query(sql.insert('users',user));
  return rows;
};

// users.deleteUser = async (id) => {
//   const { rows } = await 
// }

module.exports = users;
