import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Order from './Order.jsx'
import Manage from './Status.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import NotFound from './NotFound.jsx'
import Footer from './Footer.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:(
       <>
    <App />
    <Order />
    <Footer />
       </>
    ) ,
    errorElement:<NotFound />
  },
  {
    path:'/admin',
    element: <Manage />
  }
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
   
  </StrictMode>,
)
