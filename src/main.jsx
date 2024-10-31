import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import { ContextProvider } from './contexts/contextprovider.jsx'
import './index.css'
import App from './App.jsx'
import './styles.css'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </StrictMode>
)
