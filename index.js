const express = require('express')

const path = require('path')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '0e0cf7cb199b4e1981b15db83c990447',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get((req, res) => {
    try {
        funct()
      }
      catch (exception_var) {
        funct()
      }
      rollbar.log('catch')
      res.status(200).send(funct())
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 4500

app.listen(port, function() {
    console.log(`Server rocking out on ${port}`)
})