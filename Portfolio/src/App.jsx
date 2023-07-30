import { useState } from 'react'
import Background from './components/Background'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background/>
    <div className='title'>
    <h1>Hello World</h1>
    </div>
   
    </>
  )
}

export default App
