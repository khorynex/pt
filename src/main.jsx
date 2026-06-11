import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {PrayerProvider} from './context/PrayerContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PrayerProvider>
        <App />
      </PrayerProvider>
    </BrowserRouter>
  </StrictMode>,
)
