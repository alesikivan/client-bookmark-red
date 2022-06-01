require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, '..', 'angular-bookmark')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'angular-bookmark', 'index.html'));
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
