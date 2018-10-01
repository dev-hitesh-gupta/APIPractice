const Sequelize = require('sequelize');
const db = {};

let sequelize;
if (process.env['DATABASE_URL']) {
 sequelize = new Sequelize(process.env['DATABASE_URL']);
} else {
 console.error('Please specify DATABASE_URL');
}


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;