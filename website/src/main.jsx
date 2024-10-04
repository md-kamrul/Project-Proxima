import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="font-comic_neue h-full text-white scroll-smooth">
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
