import React, { useEffect, useState } from "react"; // Import React and two hooks for data handling
import { Link } from "react-router-dom"; // Import Link for navigation without page reload

function Home() {
  const [appointments, setAppointments] = useState([]); // Store appointment data
  const [patients, setPatients] = useState([]); // Store patient data
  const [doctors, setDoctors] = useState([]); // Store doctor data

  useEffect(() => { // Runs when the page first loads
    fetch("http://localhost:5001/appointments") // Fetch appointment data
      .then((res) => res.json()) // Convert response to JSON
      .then((data) => setAppointments(data)) // Save data to state
      .catch((err) => console.error("Error fetching appointments:", err)); // Log errors if any

    fetch("http://localhost:5001/patients") // Fetch patient data
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((err) => console.error("Error fetching patients:", err));

    fetch("http://localhost:5001/doctors") // Fetch doctor data
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []); // Empty array means it runs only once when the component mounts

  console.log("Appointments:", appointments); // Show fetched appointments in console
  console.log("Patients:", patients); // Show fetched patients in console
  console.log("Doctors:", doctors); // Show fetched doctors in console

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
  const todaysAppointments = appointments.filter((a) => a.date === today); // Filter only today's appointments

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col"> {/* Light blue background and vertical layout */}
      
      {/* Navbar Section */}
      <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md rounded-b-2xl"> {/* Top bar with rounded bottom edges */}
        <h1 className="text-2xl font-bold">MediCare Management System</h1> {/* App title */}
        
        <div className="flex space-x-6 text-sm font-medium"> {/* Links spaced evenly */}
          <Link to="/" className="hover:underline">Home</Link> {/* Home link */}
          <Link to="/about" className="hover:underline">About Us</Link> {/* About link */}
          <Link to="/patients" className="hover:underline">Patients</Link> {/* Patients link */}
          <Link to="/appointments" className="hover:underline">Appointments</Link> {/* Appointments link */}
          <Link to="/doctors" className="hover:underline">Doctors</Link> {/* Doctors link */}
        </div>
      </nav>

export default Home; // Export component so it can be used in App.jsx
