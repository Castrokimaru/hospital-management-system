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
