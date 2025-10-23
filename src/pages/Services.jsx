import React, { useState, useEffect } from "react";

const ServicesCatalog = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading services...</p>
      </div>
    );

  const serviceDetails = {
    "General Consultation": {
      category: "Primary Care",
      description: "Comprehensive medical examination and health assessment",
      preparation: "No special preparation required",
      availability: "Mon-Fri: 8 AM - 6 PM",
    },
    "Laboratory Tests": {
      category: "Clinical Laboratory",
      description: "Blood tests, urinalysis, pathology and diagnostics",
      preparation: "Fasting may be required",
      availability: "24/7",
    },
    "Dental Cleaning": {
      category: "Dental Services",
      description: "Professional dental cleaning and oral health check",
      preparation: "Maintain oral hygiene",
      availability: "Mon-Sat: 9 AM - 5 PM",
    },
    "X-Ray": {
      category: "Imaging Services",
      description: "X-Ray, CT Scan, MRI, Ultrasound imaging",
      preparation: "Fasting may be required",
      availability: "24/7",
    },
    "MRI Scan": {
      category: "Imaging Services",
      description: "Magnetic Resonance Imaging and advanced scanning",
      preparation: "Remove metal objects",
      availability: "24/7",
    },
    "Physiotherapy Session": {
      category: "Rehabilitation",
      description: "Physical therapy and rehabilitation",
      preparation: "Wear comfortable clothes",
      availability: "Mon-Sat: 8 AM - 6 PM",
    },
    "Antenatal Check-up": {
      category: "Maternity Care",
      description: "Pregnancy care and maternal monitoring",
      preparation: "Regular pregnancy monitoring",
      availability: "Mon-Fri: 9 AM - 5 PM",
    },
    "Skin Treatment": {
      category: "Dermatology",
      description: "Dermatological treatments and skincare",
      preparation: "Consultation required",
      availability: "Mon-Fri: 9 AM - 5 PM",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Hospital Management System
        </h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
          Services Catalog
        </h2>
        {services.map((s, i) => {
          const details = serviceDetails[s.name] || {};
          return (
            <div key={s.id}>
              <div className="bg-white p-4 flex justify-between rounded shadow-sm">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{s.name}</h3>
                  <p className="text-gray-700 font-medium">{details.category}</p>
                  <p className="text-gray-600 mb-2">{details.description}</p>
                  <p className="text-gray-600">
                    <span className="font-medium">Preparation: </span>
                    {details.preparation}
                  </p>
                  <span className="inline-block mt-2 bg-blue-50 text-blue-800 px-3 py-1 rounded border border-blue-200 font-semibold">
                    Price: Ksh{s.price.toLocaleString()}
                  </span>
                </div>
                <span
                  className={`ml-4 px-4 py-2 rounded font-semibold border text-lg ${
                    details.availability?.includes("24/7")
                      ? "bg-green-50 text-green-800 border-green-200"
                      : "bg-blue-50 text-blue-800 border-blue-200"
                  }`}
                >
                  {details.availability}
                </span>
              </div>
              {i < services.length - 1 && <hr className="my-6 border-gray-300" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCatalog;
