var express = require('express')
const PORT = process.env.PORT || 5000

var app = express()

app.use(express.static('public'))
app.get('/', (req, res) => {
	res.send('OK')
})

app.listen(PORT, () => {
  console.log('App is running')
})