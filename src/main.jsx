import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/login/login.jsx'
import Homepage from './pages/homepage/homepage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Homepage />
  </StrictMode>,
)
