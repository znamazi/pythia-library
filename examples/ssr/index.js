const express = require('express')
const { GetData } = require('pythia')

const port = 3050
const app = express()

app.get('*', (req, res) => {
  GetData()
  res.send(`Axios Get Data you can see in terminal`)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
