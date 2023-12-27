import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const initializeApp = (rootElem: HTMLElement) => {
  if (!rootElem) console.log('[webapp] initialization failed, rootElem is missing')
  ReactDOM.createRoot(rootElem).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
