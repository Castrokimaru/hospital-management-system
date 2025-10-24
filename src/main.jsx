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
import PatientRecords from './pages/Records.jsx'
import BillingInsurance from './pages/BillingInsurance.jsx'

//React Router configuration for a healthcare/medical application/
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Main layout wrapper that provides consistent UI across all pages
    children: [
      // Route definitions for the application
      { path: "/", element: <Home /> },              // Default route - homepage
      { path: "/home", element: <Home /> },          // Explicit home route
      { path: "/services", element: <ServicesCatalog /> }, // Medical services catalog
      { path: "/about", element: <About /> },        // About page
      { path: "/appointments", element: <Appointments /> }, // Appointment scheduling
      { path: "/doctors", element: <DoctorsSpeciality /> }, // Doctor specialties listing
      { path: "/availability", element: <DoctorAv /> },    // Doctor availability
      { path: "/records", element: <PatientRecords /> },   // Patient medical records
      { path: "/billing", element: <BillingInsurance /> }, // Billing and insurance
    ],
  },
]);

 //Uses StrictMode for highlighting potential problems during development
 //Wraps the app with RouterProvider to enable client-side routing

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);