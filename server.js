require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require('./config/mongoose')

app.use(cors())
app.use(express.json())

app.use('/api', require('./routes/api'))

app.listen(port, () => console.log('Server Started'))