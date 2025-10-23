import React from 'react';
import { Link } from 'react-router-dom';

function About() {
 
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-2">
          MediCare ⚕️  Management System
        </h1>
        <h2 className="text-sm text-gray-500 text-center mb-6">AU</h2>

        <div className="border-t border-gray-200 pt-6 space-y-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              About Us
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hospital information and internal resources
            </p>
          </div>

          {/* Mission Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide exceptional healthcare services with compassion,
              innovation, and excellence. We are committed to improving the
              health and well-being of our community through quality patient
              care, advanced medical technology, and dedicated healthcare
              professionals.
            </p>
          </div>

          {/* Department Contacts */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Department Contacts
            </h3>
            <p className="text-gray-600 mb-4">
              Quick reference for key hospital departments
            </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;