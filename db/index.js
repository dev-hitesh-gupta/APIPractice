const { Client } = require('pg')

const client = new Client({
  database: 'users'
})

client.connect()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', e.stack))
module.exports = {
  query: (text, params) => client.query(text, params)
}