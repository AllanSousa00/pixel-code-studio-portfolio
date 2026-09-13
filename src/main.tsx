import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from './lib/router'
import { PortfolioRouter } from './Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <PortfolioRouter />
    </RouterProvider>
  </StrictMode>,
)
