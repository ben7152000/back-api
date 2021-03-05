const { connect, connection } = require('mongoose')
const db = connection

connect(process.env.DATABASE_URL, { useUnifiedTopology: true , useNewUrlParser: true } )

db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Database'))

module.exports = db