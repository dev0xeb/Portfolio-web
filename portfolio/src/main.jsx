//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// Register the PWA service worker (vite-plugin-pwa virtual helper)
import { registerSW } from 'virtual:pwa-register'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)

// register service worker for PWA (auto updates)
try {
  registerSW({ immediate: true })
} catch (err) {
  // virtual:pwa-register is replaced at build time; ignore in dev if not available
  // console.debug('PWA register unavailable', err)
}
