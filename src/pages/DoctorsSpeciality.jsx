import React, { useState, useEffect } from 'react';

const DoctorsSpeciality = () => {
  // State for storing doctor data fetched from API
  const [doctors, setDoctors] = useState([]);
  // State to track loading status for better user experience
  const [loading, setLoading] = useState(true);
  // State to track which tab is currently active
  const [activeTab, setActiveTab] = useState('All Doctors');

  // useEffect hook runs when component mounts
  useEffect(() => {
    // Fetch doctor data from JSON server
    fetch("http://localhost:5001/doctors")
      // Convert response to JSON format
      .then((res) => res.json())
      // Handle successful data retrieval
      .then((data) => {
        // Update doctors state with fetched data
        setDoctors(data);
        // Set loading to false since data has been received
        setLoading(false);
      })
      // Handle errors during fetch operation
      .catch((err) => console.error("Error fetching doctors:", err));
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Function to generate formatted department codes based on specialty and ID
  const generateDepartmentCode = (specialty, id) => {
    // Mapping of doctor specialties to department names
    const specialtyMap = {
      'Dermatologist': 'Dermatology',
      'General Practitioner': 'General Practice',
      'Pediatrician': 'Pediatrics',
      'Cardiologist': 'Cardiology',
      'Neurologist': 'Neurology',
      'Orthopedic Surgeon': 'Orthopedics',
      'Physiotherapist': 'Physiotherapy',
      'Gynecologist': 'Gynecology',
      'Dentist': 'Dentistry',
      'Psychiatrist': 'Psychiatry'
    };
    
    // Get department name from map, fallback to original specialty if not found
    const specialtyName = specialtyMap[specialty] || specialty;
    // Format: "DepartmentName D001" with ID padded to 3 digits
    return `${specialtyName} D${id.toString().padStart(3, '0')}`;
  };

  // Display loading screen while data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading doctors...</div>
      </div>
    );
  }

  // Main component render
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section with hospital name */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Hospital Management System
            </h1>
          </div>
        </div>
      </header>

      {/* Main content area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page title and description section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Doctors & Specialties Directory
          </h2>
          <p className="text-lg text-gray-600">
            Browse medical staff and specialties
          </p>
        </div>

        {/* Tab navigation section */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {/* Render tabs for different views */}
              {['All Doctors', 'Specialties'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  // Conditional styling for active/inactive tabs
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
