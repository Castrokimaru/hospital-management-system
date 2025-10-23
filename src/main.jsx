import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ToolBar from './ToolBar.jsx'
import About from './pages/About.jsx'

import Home from './pages/Home.jsx' 
import Layout from './LayOut.jsx'

import Appointments from './pages/Appointments.jsx'
import DoctorAv from './pages/DoctorAv.jsx'

import DoctorsSpeciality from './pages/DoctorsSpeciality.jsx'
import ServicesCatalog from './pages/Services.jsx'

import PatientRecords from './pages/Records.jsx'



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
  element:<ServicesCatalog /> },
  {path:"/about",
  element:<About />},
  {path:"/appointments",
  element:<Appointments />},
  {path:"/doctors",
  element:<DoctorsSpeciality />},
  {path:"/availability",
  element:<DoctorAv />},
<<<<<<< Updated upstream
=======
  {path:"/records",
  element:<PatientRecords />},
  {path:"/billing",
  element:<ToolBar />},
>>>>>>> Stashed changes
  ]
  }
  

]);

createRoot(document.getElementById('root')).render(              //pointing to the root div in index.html
  <StrictMode>
  <RouterProvider router={router} />                              //providing the router to the app
  </StrictMode>,
)
