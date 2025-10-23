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

        {/* Available Medical Services Section */}
        <div className="mb-2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Available Medical Services
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Complete list of services offered by the hospital
          </p>

          {/* Services List */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={service.id}>
                {/* Service Item */}
                <div className="bg-white rounded-none p-1">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      {/* Service Name with bullet point */}
                      <div className="flex items-start mb-2">
                        <span className="text-2xl text-gray-800 mr-3 mt-1">•</span>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h4>
                          
                          {/* Service Category */}
                          <p className="text-gray-700 text-lg mb-2 font-medium">
                            {getServiceCategory(service.name)}
                          </p>
                          
                          {/* Service Description */}
                          <p className="text-gray-600 text-lg mb-3">
                            {getServiceDescription(service.name)}
                          </p>
                          
                          {/* Preparation */}
                          <div className="text-gray-600 text-lg">
                            <span className="font-medium">Preparation:</span>
                            <p className="ml-2 inline">{getServicePreparation(service.name)}</p>
                          </div>

                          {/* Price Display */}
                          <div className="mt-3">
                            <span className="inline-block bg-blue-50 text-blue-800 text-lg font-semibold px-4 py-2 border border-blue-200 rounded">
                              Price: Ksh{service.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Availability Badge - Right Aligned */}
                    <div className="text-right ml-4">
                      <span className={`inline-block px-4 py-2 rounded text-lg font-semibold border ${
                        getServiceAvailability(service.name).includes('24/7') 
                          ? 'bg-green-50 text-green-800 border-green-200' 
                          : 'bg-blue-50 text-blue-800 border-blue-200'
                      }`}>
                        {getServiceAvailability(service.name)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Separator line between services */}
                {index < services.length - 1 && (
                  <div className="border-t border-gray-400 my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions to provide service details based on name
const getServiceCategory = (serviceName) => {
  const categories = {
    'General Consultation': 'Primary Care',
    'Laboratory Tests': 'Clinical Laboratory',
    'Dental Cleaning': 'Dental Services',
    'X-Ray': 'Imaging Services',
    'MRI Scan': 'Imaging Services',
    'Physiotherapy Session': 'Rehabilitation',
    'Antenatal Check-up': 'Maternity Care',
    'Skin Treatment': 'Dermatology'
  };
  return categories[serviceName] || 'Medical Service';
};

const getServiceDescription = (serviceName) => {
  const descriptions = {
    'General Consultation': 'Comprehensive medical examination and health assessment',
    'Laboratory Tests': 'Blood tests, urinalysis, pathology and diagnostic services',
    'Dental Cleaning': 'Professional dental cleaning and oral health examination',
    'X-Ray': 'X-Ray, CT Scan, MRI, Ultrasound imaging services',
    'MRI Scan': 'Magnetic Resonance Imaging and advanced diagnostic scanning',
    'Physiotherapy Session': 'Physical therapy and rehabilitation services',
    'Antenatal Check-up': 'Pregnancy care and maternal health monitoring',
    'Skin Treatment': 'Dermatological treatments and skin care services'
  };
  return descriptions[serviceName] || 'Professional medical service';
};

const getServicePreparation = (serviceName) => {
  const preparations = {
    'General Consultation': 'No special preparation required',
    'Laboratory Tests': 'Fasting required for certain tests (8–12 hours)',
    'Dental Cleaning': 'Regular oral hygiene maintenance',
    'X-Ray': 'Fasting may be required for certain scans',
    'MRI Scan': 'Remove all metal objects; consultation required',
    'Physiotherapy Session': 'Wear comfortable clothing',
    'Antenatal Check-up': 'Regular pregnancy monitoring',
    'Skin Treatment': 'Consultation required for specific treatments'
  };
  return preparations[serviceName] || 'Consultation required';
};

const getServiceAvailability = (serviceName) => {
  const availability = {
    'General Consultation': 'Mon-Fri: 8 AM - 6 PM',
    'Laboratory Tests': '24/7',
    'Dental Cleaning': 'Mon-Sat: 9 AM - 5 PM',
    'X-Ray': '24/7',
    'MRI Scan': '24/7',
    'Physiotherapy Session': 'Mon-Sat: 8 AM - 6 PM',
    'Antenatal Check-up': 'Mon-Fri: 9 AM - 5 PM',
    'Skin Treatment': 'Mon-Fri: 9 AM - 5 PM'
  };
  return availability[serviceName] || 'Mon-Fri: 9 AM - 5 PM';
};

export default ServicesCatalog;