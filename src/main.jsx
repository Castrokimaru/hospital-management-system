import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ToolBar from './ToolBar.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx' 
import Layout from './LayOut.jsx'

const router = createBrowserRouter ([ 
   {
    path: "/",
    element: <Layout />, // this wraps all your pages with ToolBar
    children: [                      // the array of objects store the different routes
  {path:"/", 
  element:<Home/>},
  {path:"/home",
  element:<Home />},
  {path:"/services",
  element:<ToolBar />},
  {path:"/about",
  element:<About />},
  {path:"/appointments",
  element:<ToolBar />},
  {path:"/doctors",
  element:<ToolBar />},
  {path:"/availability",
  element:<ToolBar />},
  {path:"/records",
  element:<ToolBar />},
  {path:"/billing",
  element:<ToolBar />},
  ]
  }
  

]);

createRoot(document.getElementById('root')).render(              //pointing to the root div in index.html
  <StrictMode>
  <RouterProvider router={router} />                              //providing the router to the app
  </StrictMode>,
)
