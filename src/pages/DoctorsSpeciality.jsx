import React, { useState, useEffect } from 'react';

const DoctorsSpeciality = () => {
  // State for storing doctor data fetched from API
  const [doctors, setDoctors] = useState([]);
  // State to track loading status for better user experience
  const [loading, setLoading] = useState(true);
  // State to track which tab is currently active
  const [activeTab, setActiveTab] = useState('All Doctors');

  