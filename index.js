const express = require('express')
var morgan = require('morgan')
const app = express()
const port = 3000
app.use(morgan('combined'))

app.get('/trang-chu', (req, res) => {
  res.send('Hello World! 1234')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})