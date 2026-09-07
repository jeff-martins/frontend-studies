import './App.css'

import { useState } from 'react'

import FirstComponent from './components/FirstComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div className="App">
          <h1>Fundamentos do React</h1>
          <FirstComponent />  
           </div>
  )
}

export default App
