import React, { useState, useEffect } from "react";

const PatientRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);

  // Hardcoded patient data
  const basePatients = [
    { id: 1, name: "Brian Otieno", age: 32, gender: "Male", phone: "0721345678", email: "b.otieno@example.com", diagnosis: "Malaria", doctorId: 2 },
    { id: 2, name: "Faith Wanjiku", age: 26, gender: "Female", phone: "0702456789", email: "f.wanjiku@example.com", diagnosis: "Allergy", doctorId: 1 },
    { id: 3, name: "George Mwangi", age: 41, gender: "Male", phone: "0710456723", email: "g.mwangi@example.com", diagnosis: "Hypertension", doctorId: 4 },
    { id: 4, name: "Cynthia Achieng", age: 29, gender: "Female", phone: "0745123456", email: "c.achieng@example.com", diagnosis: "Asthma", doctorId: 3 },
    { id: 5, name: "Daniel Kiptoo", age: 35, gender: "Male", phone: "0798123445", email: "d.kiptoo@example.com", diagnosis: "Fracture", doctorId: 6 },
    { id: 6, name: "Mercy Naliaka", age: 22, gender: "Female", phone: "0711345629", email: "m.naliaka@example.com", diagnosis: "Migraine", doctorId: 5 },
    { id: 7, name: "Samuel Mutua", age: 48, gender: "Male", phone: "0702123444", email: "s.mutua@example.com", diagnosis: "Diabetes", doctorId: 4 },
    { id: 8, name: "Lucy Wairimu", age: 30, gender: "Female", phone: "0726123490", email: "l.wairimu@example.com", diagnosis: "Pregnancy Check-up", doctorId: 8 },
  ];

  // Generate random date between Jan 2024 and today
  const randomLastVisit = () => {
    const start = new Date(2024, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end - start));
    return randomDate.toLocaleDateString("en-GB");
  };

  // Add randomized last visits to patients on mount
  useEffect(() => {
    const patientsWithVisits = basePatients.map((p) => ({
      ...p,
      insurance: randomInsurance(),
      lastVisit: randomLastVisit(),
    }));
    setPatients(patientsWithVisits);
  }, []);

  // Random insurance provider
  const randomInsurance = () => {
    const insurances = ["JUBILEE", "AAR", "Britam", "SHA", "APA", "Madison"];
    return insurances[Math.floor(Math.random() * insurances.length)];
  };

  // Search filter
  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-2">Patient Records</h1>
      <p className="text-gray-600 mb-6">
        View, search, and manage all patient records within the hospital system.
      </p>

      {/* Search Bar Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <input
          type="text"
          placeholder="Search patient by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Patient Directory */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-5 font-semibold text-gray-700 border-b pb-2 mb-3">
          <span>Patient Name</span>
          <span>Insurance</span>
          <span>Contact</span>
          <span>Last Visit</span>
          <span>Action</span>
        </div>
