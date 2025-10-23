import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Home component for the dashboard page
export default function Home() {
  // State variables to store appointments, patients, doctors, and loading state
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Fetch appointments, patients, and doctors from JSON server on mount
  useEffect(() => {
    ["appointments", "patients", "doctors"].forEach((key) =>
      fetch(`http://localhost:5001/${key}`)
        .then((r) => r.json())
        .then((d) =>
          key === "appointments"
            ? setAppointments(d) // Set appointments
            : key === "patients"
            ? setPatients(d)     // Set patients
            : setDoctors(d)      // Set doctors
        )
    );
  }, []);

  // Filter only today's appointments
  const todaysAppointments = appointments.filter((a) => a.date === today);

  // Function to add a new random appointment
  const addAppointment = async () => {
    if (!patients.length || !doctors.length) return alert("Add patients/doctors first");
    setLoading(true);

    // Create appointment object with random patient and doctor
    const newApt = {
      patientId: patients[Math.random() * patients.length | 0].id,
      doctorId: doctors[Math.random() * doctors.length | 0].id,
      date: today,
      time: "10:00 AM",
      status: "Pending"
    };

    // Send POST request to JSON server
    const res = await fetch("http://localhost:5001/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newApt)
    });

    // Update state with new appointment and stop loading
    setAppointments([...appointments, await res.json()]);
    setLoading(false);
  };

  // Function to cancel all of today's appointments
  const cancelAppointments = async () => {
    if (!todaysAppointments.length) return alert("No appointments to cancel");

    // Delete each appointment for today from JSON server
    for (const a of todaysAppointments)
      await fetch(`http://localhost:5001/appointments/${a.id}`, { method: "DELETE" });

    // Update state to remove cancelled appointments
    setAppointments(appointments.filter((a) => a.date !== today));
    alert("Today's appointments cancelled");
  };

  return (
    <div className="bg-blue-50 min-h-screen">
      {/* Navbar with app title and navigation links */}
      <nav className="bg-blue-700 text-white p-4 flex justify-between rounded-b-2xl">
        <h1 className="text-2xl font-bold">MediCare System</h1>
        <div className="flex space-x-4 text-sm">
          {["Home","About","Patients","Appointments","Doctors"].map((t,i) => (
            <Link key={i} to={["/","/about","/patients","/appointments","/doctors"][i]}>
              {t}
            </Link>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-5xl mx-auto p-8 space-y-8">
        {/* Dashboard header */}
        <h2 className="text-2xl font-bold text-center text-blue-700">Dashboard</h2>

        {/* Cards showing statistics */}
        <div className="grid sm:grid-cols-3 gap-6">
          <Card title="Appointments Today" value={todaysAppointments.length} color="blue"/>
          <Card title="Patients Checked In" value="18" color="green"/>
          <Card title="Doctors On Duty" value={doctors.length} color="yellow"/>
        </div>

        {/* Quick action buttons */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Button onClick={addAppointment} color="blue">{loading?"Scheduling...":"New Appointment"}</Button>
          <Button onClick={cancelAppointments} color="blue">Cancel Appointments</Button>
          <Button color="indigo">Search Patient</Button>
        </div>

        {/* List of today's appointments */}
        <h3 className="text-lg font-semibold text-gray-800 mt-8">Today's Schedule</h3>
        {todaysAppointments.length ? todaysAppointments.map(a => {
          const p = patients.find(x => x.id === a.patientId); // Get patient info
          const d = doctors.find(x => x.id === a.doctorId);    // Get doctor info
          return (
            <div key={a.id} className="border p-3 rounded-xl shadow-sm flex justify-between mb-4">
              <div>
                <p className="text-sm text-gray-500">{a.time}</p>
                <h4 className="font-semibold text-blue-700">{p?.name || "Unknown"}</h4>
                <p className="text-sm text-gray-600">{d ? `${d.name} • ${d.specialty}` : "Unknown Doctor"}</p>
              </div>
              {/* Appointment status badge */}
              <span className={`px-3 py-1 text-sm rounded-full ${
                a.status==="Pending"?"bg-yellow-100 text-yellow-700":
                a.status==="Confirmed"?"bg-green-100 text-green-700":"bg-red-100 text-red-700"
              }`}>{a.status.toLowerCase()}</span>
            </div>
          );
        }) : <p className="text-gray-500">No appointments today.</p>}
      </div>
    </div>
  );
}

// Card component to display stats
const Card = ({title,value,color}) => (
  <div className={`bg-${color}-100 p-4 rounded-xl shadow`}>
    <h3 className={`text-${color}-700 font-semibold`}>{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

// Reusable Button component
const Button = ({onClick,color,children}) => (
  <button onClick={onClick} className={`bg-${color}-600 hover:bg-${color}-700 text-white p-3 rounded-xl`}>
    {children}
  </button>
);
