import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className="container">
    <div className="header part">
      <h1>Header Part</h1>
    </div>
    <div className="content part">
      <h1>content Part</h1>
    </div>
    <div className="Footer part">
      <h1>footer Part</h1>
    </div>
   </>
  )
}

export default App
