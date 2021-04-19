const express = require('express')
const { GetData } = require('pythia')

const port = 3050
const app = express()

app.get('*', (req, res) => {
  GetData()
  res.send(`pythia Get Data`)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
