import React, { useState } from "react";

// Main functional component for managing appointments
const AppointmentsManagement = () => {
  // State variable to handle search input
  const [searchTerm, setSearchTerm] = useState("");
  // State variable to handle filtering based on appointment status
  const [statusFilter, setStatusFilter] = useState("all");

  // Sample appointment data (simulating fetched data)
  const appointments = [
    { id: 1, patientId: 1, doctorId: 2, date: "2025-10-22", time: "10:30 AM", status: "Confirmed" },
    { id: 2, patientId: 3, doctorId: 4, date: "2025-10-23", time: "11:00 AM", status: "Pending" },
    { id: 3, patientId: 5, doctorId: 6, date: "2025-10-24", time: "9:00 AM", status: "Confirmed" },
    { id: 4, patientId: 8, doctorId: 8, date: "2025-10-25", time: "2:30 PM", status: "Pending" },
    { id: 5, patientId: 10, doctorId: 7, date: "2025-10-25", time: "3:00 PM", status: "Confirmed" },
    { id: 6, patientId: 2, doctorId: 1, date: "2025-10-26", time: "1:30 PM", status: "Pending" },
    { id: 7, patientId: 4, doctorId: 3, date: "2025-10-27", time: "10:00 AM", status: "Confirmed" },
    { id: 8, patientId: 6, doctorId: 5, date: "2025-10-27", time: "11:30 AM", status: "Cancelled" },
    { id: 9, patientId: 12, doctorId: 5, date: "2025-10-28", time: "3:00 PM", status: "Confirmed" },
    { id: 10, patientId: 13, doctorId: 2, date: "2025-10-28", time: "12:30 PM", status: "Confirmed" },
    { id: 11, patientId: 15, doctorId: 3, date: "2025-10-29", time: "9:00 AM", status: "Pending" },
    { id: 12, patientId: 16, doctorId: 5, date: "2025-10-30", time: "2:00 PM", status: "Confirmed" },
    { id: 13, patientId: 18, doctorId: 2, date: "2025-10-30", time: "11:00 AM", status: "Pending" },
    { id: 14, patientId: 19, doctorId: 6, date: "2025-11-01", time: "4:00 PM", status: "Confirmed" },
    { id: 15, patientId: 20, doctorId: 4, date: "2025-11-02", time: "1:00 PM", status: "Confirmed" },
  ];

  // Filter the list of appointments based on search and status filter
  const filteredAppointments = appointments.filter((apt) => {
    // Match the search term with ID, patient ID, doctor ID, or date
    const matchesSearch =
      apt.id.toString().includes(searchTerm) ||
      apt.patientId.toString().includes(searchTerm) ||
      apt.doctorId.toString().includes(searchTerm) ||
      apt.date.includes(searchTerm);

    // Match the status filter (or show all if 'all' is selected)
    const matchesStatus =
      statusFilter === "all" || apt.status.toLowerCase() === statusFilter.toLowerCase();

    // Return appointments that satisfy both filters
    return matchesSearch && matchesStatus;
  });

  // Color codes for different appointment statuses
  const statusColors = {
    Confirmed: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-800",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title and Subtitle */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Appointments Management</h1>
      <p className="text-gray-600 mb-6">Schedule and manage patient appointments</p>

      {/* Toolbar Section: Search Bar + Status Filter Dropdown */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search appointments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Status Filter Dropdown */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="all">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      
};

// Export the component for use in other files
export default AppointmentsManagement;
