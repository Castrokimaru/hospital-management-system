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
