import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ToolBar from './ToolBar.jsx'
import About from './pages/About.jsx'

const router = createBrowserRouter ([                       // the array of objects store the different routes
  {path:"/", 
  element:<App />},
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
  

]);

createRoot(document.getElementById('root')).render(              //pointing to the root div in index.html
  <StrictMode>
  <RouterProvider router={router} />                              //providing the router to the app
  </StrictMode>,
)
