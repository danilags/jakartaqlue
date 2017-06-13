const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const index = require('./routes/index')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/maps', index)

app.listen(3000, function() {
  console.log("Server is running on port 3000");
})