$ mkdir app
$ cd app

$ sudo apt npm install -y
$ npm init (i don't know but it kept failing, so i had to force installation and it worked)
$ npm init -f (this worked)
$ npm install express
-------------------------------------------------------------
# Create a file named app.js and add the following code:

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
