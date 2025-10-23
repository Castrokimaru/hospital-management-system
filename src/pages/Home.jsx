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

      {/* Main Dashboard Area */}
      <div className="flex-grow: flex flex-col items-center py-10 px-4"> {/* Centers dashboard in remaining space */}
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-5xl p-8 space-y-8"> {/* Main white container with rounded corners */}
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">Dashboard</h2> {/* Dashboard title */}
            <p className="text-gray-500">Welcome to MediCare Management System</p> {/* Subtext */}
          </div>

          {/* Statistics Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid layout */}
            <div className="bg-blue-100 p-5 rounded-xl shadow"> {/* Appointments box */}
              <h3 className="text-lg font-semibold text-blue-700 mb-1">Appointments Today</h3>
              <p className="text-3xl font-bold text-gray-800">{todaysAppointments.length}</p> {/* Dynamic count */}
              <p className="text-sm text-gray-500">+3 from yesterday</p>
            </div>

            <div className="bg-green-100 p-5 rounded-xl shadow"> {/* Patients box */}
              <h3 className="text-lg font-semibold text-green-700 mb-1">Patients Checked In</h3>
              <p className="text-3xl font-bold text-gray-800">18</p> {/* Example static value */}
              <p className="text-sm text-gray-500">6 pending check-in</p>
            </div>

            <div className="bg-yellow-100 p-5 rounded-xl shadow"> {/* Doctors box */}
              <h3 className="text-lg font-semibold text-yellow-700 mb-1">Doctors On Duty</h3>
              <p className="text-3xl font-bold text-gray-800">{doctors.length}</p> {/* Dynamic count */}
              <p className="text-sm text-gray-500">3 on emergency call</p>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gray-100 p-5 rounded-xl shadow space-y-2"> {/* Notification box */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Notifications</h3>
            <p className="text-gray-600">3 appointments pending confirmation for tomorrow</p>
            <p className="text-gray-600">Dr. Brian Karanja will be on leave next week</p>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid sm:grid-cols-3 gap-4"> {/* Grid for buttons */}
              <button className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition">Schedule New Appointment</button>
              <button className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition">Check-In Patient</button>
              <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition">Search Patient Record</button>
            </div>
          </div>

  );
}

export default Home; // Export component so it can be used in App.jsx
