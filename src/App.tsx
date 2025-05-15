import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="home" date-test="home">
        <h1 id="title" date-test="title">
          Hola Mundo
        </h1>
      </div>
    </>
  )
}

export default App
