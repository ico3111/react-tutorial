import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Paragrafo from './Paragrafo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Paragrafo mensagem="opa" />
  </StrictMode>,
)
