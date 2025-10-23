import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ToolBar from './ToolBar.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Layout from './LayOut.jsx'
import Appointments from './pages/Appointments.jsx'
import DoctorAv from './pages/DoctorAv.jsx'
import DoctorsSpeciality from './pages/DoctorsSpeciality.jsx'
import ServicesCatalog from './pages/Services.jsx'
<<<<<<< Updated upstream
import PatientRecords from './pages/Records.jsx'
=======
import BillingInsurance from './pages/BillingInsurance.jsx'
>>>>>>> Stashed changes

const router = createBrowserRouter([
  {
    path: "/",
<<<<<<< Updated upstream
    element: <Layout />, // Wraps all pages with the main layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/services", element: <ServicesCatalog /> },
      { path: "/about", element: <About /> },
      { path: "/appointments", element: <Appointments /> },
      { path: "/doctors", element: <DoctorsSpeciality /> },
      { path: "/availability", element: <DoctorAv /> },
      { path: "/records", element: <PatientRecords /> },
      { path: "/billing", element: <ToolBar /> },
    ],
  },
=======
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
  {path:"/billing",
  element:<BillingInsurance/>},
  ]
  }
  

>>>>>>> Stashed changes
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
