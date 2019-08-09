const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://beatrizf13:beatrizf13@ds261277.mlab.com:61277/keep-api',
  {
    useNewUrlParser: true
  }
)

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
