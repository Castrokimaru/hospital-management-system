import React, { useState, useEffect } from "react";

const DoctorsSpeciality = () => {
  // State for doctors data, loading, and active tab
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All Doctors");

  // Fetch doctor data once when component mounts
  useEffect(() => {
    fetch("https://json-server-vercel-ytuo.vercel.app/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []);

  // Generate department code from specialty and ID
  const generateDepartmentCode = (specialty, id) => {
    const map = {
      Dermatologist: "Dermatology",
      "General Practitioner": "General Practice",
      Pediatrician: "Pediatrics",
      Cardiologist: "Cardiology",
      Neurologist: "Neurology",
      "Orthopedic Surgeon": "Orthopedics",
      Physiotherapist: "Physiotherapy",
      Gynecologist: "Gynecology",
      Dentist: "Dentistry",
      Psychiatrist: "Psychiatry",
    };
    const name = map[specialty] || specialty;
    return `${name} D${id.toString().padStart(3, "0")}`;
  };

  // Show loading message
  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading doctors...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Hospital Management System
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Doctors & Specialties Directory
          </h2>
          <p className="text-lg text-gray-600">
            Browse medical staff and specialties
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {["All Doctors", "Specialties"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Doctors grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-lg shadow-md border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                {/* Name */}
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {doc.name}
                </h4>
                {/* Specialty badge */}
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {doc.specialty.replace("Practitioner", "Practice")}
                </span>
                {/* Department code */}
                <p className="text-gray-700 font-medium mb-4">
                  {generateDepartmentCode(doc.specialty, doc.id)}
                </p>
                {/* Availability */}
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">{doc.availability}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoctorsSpeciality;
