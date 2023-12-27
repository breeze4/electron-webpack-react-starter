import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const initializeApp = (rootElem: HTMLElement) => {
  ReactDOM.createRoot(rootElem!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
