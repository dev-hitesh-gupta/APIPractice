const { Client } = require('pg')

const client = new Client({
  user:'postgres',
  password:'30121993',
  database: 'practice'
})

client.connect()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', e.stack))
module.exports = {
  query: (text, params) => client.query(text, params)
}