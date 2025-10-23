import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from db.json
  useEffect(() => {
    const endpoints = ["appointments", "patients", "doctors"];
    endpoints.forEach((endpoint) =>
      fetch(`http://localhost:5001/${endpoint}`)
        .then((res) => res.json())
        .then((data) => {
          if (endpoint === "appointments") setAppointments(data);
          if (endpoint === "patients") setPatients(data);
          if (endpoint === "doctors") setDoctors(data);
        })
        .catch((err) => console.error(`Error fetching ${endpoint}:`, err))
    );
  }, []);

  const today = new Date().toISOString().split("T")[0];
  const todaysAppointments = appointments.filter((a) => a.date === today);

  // Add new appointment
  const handleAddAppointment = async () => {
    if (!patients.length || !doctors.length)
      return alert("Add patients and doctors first.");

    setLoading(true);
    try {
      const newAppointment = {
        patientId: patients[Math.floor(Math.random() * patients.length)].id,
        doctorId: doctors[Math.floor(Math.random() * doctors.length)].id,
        date: today,
        time: "10:00 AM",
        status: "Pending",
      };
      const res = await fetch("http://localhost:5001/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAppointment),
      });
      const saved = await res.json();
      setAppointments([...appointments, saved]);
      alert("Appointment added successfully!");
    } catch {
      alert("Error adding appointment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md rounded-b-2xl">
        <h1 className="text-2xl font-bold">MediCare Management System</h1>
        <div className="flex space-x-6 text-sm font-medium">
          {["/", "/about", "/patients", "/appointments", "/doctors"].map(
            (path, i) => (
              <Link key={i} to={path} className="hover:underline">
                {["Home", "About Us", "Patients", "Appointments", "Doctors"][i]}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Dashboard */}
      <div className="flex-grow: flex flex-col items-center py-10 px-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-5xl p-8 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-2">Dashboard</h2>
            <p className="text-gray-500">Welcome to MediCare Management System</p>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Appointments Today", todaysAppointments.length, "blue"],
              ["Patients Checked In", 18, "green"],
              ["Doctors On Duty", doctors.length, "yellow"],
            ].map(([title, value, color], i) => (
              <div key={i} className={`bg-${color}-100 p-5 rounded-xl shadow`}>
                <h3 className={`text-lg font-semibold text-${color}-700 mb-1`}>
                  {title}
                </h3>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <button
                onClick={handleAddAppointment}
                disabled={loading}
                className={`p-3 rounded-xl text-white ${
                  loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Scheduling..." : "Schedule New Appointment"}
              </button>
              <button className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700">
                Check-In Patient
              </button>
              <button className="bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700">
                Search Patient Record
              </button>
            </div>
          </div>

          {/* Today's Schedule */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Today's Schedule</h3>
            <p className="text-gray-500 mb-4">
              Upcoming appointments for {new Date().toLocaleDateString()}
            </p>
            {todaysAppointments.length ? (
              todaysAppointments.map((a) => {
                const patient = patients.find((p) => p.id === a.patientId);
                const doctor = doctors.find((d) => d.id === a.doctorId);
                return (
                  <div
                    key={a.id}
                    className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">{a.time}</p>
                        <h4 className="font-semibold text-blue-700">
                          {patient?.name || "Unknown Patient"}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {doctor ? `${doctor.name} • ${doctor.specialty}` : "Unknown Doctor"}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          a.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : a.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {a.status.toLowerCase()}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500">No appointments scheduled for today.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
