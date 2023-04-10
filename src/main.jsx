import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserContext'
import './index.css'
import { router } from './router/index'  // 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
      {/* //reemplazo App por RouterProvider */}
    </UserProvider>
  </React.StrictMode>,
)
