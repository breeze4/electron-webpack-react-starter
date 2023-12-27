import React from 'react'
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

declare global {
  interface Window { electronAPI: any; }
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => {
          window.electronAPI.setTitle('from webapp')
        }}>Send message to Electron</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn morez
      </p>
    </>
  )
}

export default App
