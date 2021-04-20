const express = require('express')
const { GetData, async } = require('pythia')

const port = 3050
const app = express()

app.get('*', async (req, res) => {
  const result = await GetData()
  const data = JSON.stringify(result.data, undefined, 2)
  const output = `<h2>Axios Reponse When Is Used In Node :</h2>
  <pre id="json">${data}</pre>`
  res.send(output)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
