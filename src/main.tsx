import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FavoritesProvider } from './context/FavoritesContext'
import { ToastProvider } from './context/ToastContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FavoritesProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </FavoritesProvider>
  </StrictMode>,
)