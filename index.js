const express = require('express')

const path = require('path')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4500

app.listen(port, function() {
    console.log(`Server rocking out on ${port}`)
})