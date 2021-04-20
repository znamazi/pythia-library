import React from 'react'
import { GetData } from 'pythia'

function App() {
  const [result, setResult] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      const result = await GetData()

      setResult(JSON.stringify(result.data, undefined, 2))
    }
    fetchData()
  }, [])
  return (
    <div className="App">
      <h2>Axios Reponse When When Is Used In React :</h2>
      <pre id="json">{result}</pre>
    </div>
  )
}

export default App
