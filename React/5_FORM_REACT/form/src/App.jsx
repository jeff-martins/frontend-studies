import './App.css'
import MyForm from './components/MyForm'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Form em React</h1>
      <MyForm userName="Jeferson" userEmail="jeferson@example.com" />z
    </div>
  )
};

export default App
