import React from 'react'
import { GetData } from 'pythia'

function App() {
  React.useEffect(() => {
    GetData()
  }, [])
  return <div className="App">Pythia get Data check console</div>
}

export default App
