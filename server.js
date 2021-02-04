let express = require('express')
let path = require('path')
let app = express()

app.use(express.static('./'))

app.listen(8000)