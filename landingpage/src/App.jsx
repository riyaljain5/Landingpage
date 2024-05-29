import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <nav className='container'>
          <div className='logo '>
            <img src="/images/brand_logo.png" alt="logo" />
          </div>

          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
          </ul>

          <button>Login</button>
        </nav>

      </div>
      <Body/>
    </>
  )
}

export default App
