import React from 'react';

function About() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
          MediCare :medical_symbol:  Management System
        </h1>
        <h2 className="text-sm text-gray-500 text-center mb-6">AU</h2>

    <div className="border-t border-gray-200 pt-6 space-y-6">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          About Us
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Hospital information and internal resources.Tools that support the daily operations of a healthcare facility.
           This includes patient records, staff schedules, medical equipment inventories, and administrative databases.
            Such information helps hospitals manage patient care efficiently by :
            coordinate departments, and ensure compliance with healthcare regulations.
             Internal resources also cover digital systems like
              hospital management software, intranet portals, and communication tools for staff.
              Proper management of these resources improves service delivery, data accuracy, and decision-making. 
              Ultimately, they form the backbone of a hospital's smooth and effective functioning.
        </p>
      </div>
    <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Our Mission.
        </h3>
        <p className="text-gray-600 leading-relaxed">
          To provide exceptional healthcare services with compassion,
          innovation, and excellence. We are committed to improving the
          health and well-being of our community through quality patient
          care, advanced medical technology, and dedicated healthcare
          professionals.
        </p>
      </div>


      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Department Contacts
        </h3>
        <p className="text-gray-600 mb-4">
          Quick Reference for Key Hospital Departments
Emergency Department (ED): Handles urgent and life-threatening cases 24/7
:telephone_receiver: Tel: +254 712 000 101

Outpatient Department (OPD): Consultations and minor treatments without admission
:telephone_receiver: Tel: +254 712 000 102

Radiology: Imaging services such as X-rays, CT scans, and MRIs
:telephone_receiver: Tel: +254 712 000 103

Pharmacy: Dispenses prescribed medications and provides drug information
:telephone_receiver: Tel: +254 712 000 104

Laboratory: Conducts blood tests and diagnostic analyses
:telephone_receiver: Tel: +254 712 000 105

Billing and Records: Manages patient files, insurance, and payment processing
:telephone_receiver: Tel: +254 712 000 106

        </p>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;

