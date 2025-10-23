import React, { useState, useEffect } from 'react';

const ServicesCatalog = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from JSON server using .then
    fetch('http://localhost:5001/services')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading services...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Hospital Management System
          </h1>
          
          {/* Services Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Services
            </h2>
            <p className="text-gray-600 text-lg">
              Medical services and facility information
            </p>
          </div>

          {/* Service Catalog & Facility Status */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Service Catalog
            </h3>
            <span className="text-lg text-gray-600">Facility Status</span>
          </div>

          {/* Horizontal Line */}
          <div className="border-t border-gray-400 mb-8"></div>
        </div>

       