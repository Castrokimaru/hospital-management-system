import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

function ToolBar() {
  return (
    <div className="h-full w-full bg-blue-300 shadow-xl rounded-r-2xl p-8 flex flex-col justify-between border border-blue-200">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-3 text-blue-900"><b>⚕️ MEDICARE</b></h2>
        <h5 className="text-lg mb-8 text-blue-800">Front Office Portal</h5>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-5">
          <Link to="/" className="text-white hover:text-blue-700 font-medium">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-700 font-medium">About Us</Link>
          <Link to="/appointments" className="text-white hover:text-blue-700 font-medium">Appointments</Link>
          <Link to="/doctors" className="text-white hover:text-blue-700 font-medium">Doctors & Specialties</Link>
          <Link to="/availability" className="text-white hover:text-blue-700 font-medium">Doctor Availability</Link>
          <Link to="/services" className="text-white hover:text-blue-700 font-medium">Services</Link>
          <Link to="/records" className="text-white hover:text-blue-700 font-medium">Patient Records</Link>

          {/* Separate section for Billing button */}
          <div className="pt-8 border-t border-blue-200 mt-4">
            <Link
              to="/billing"
              className="block bg-yellow-200 rounded-3xl py-3 px-6 font-medium text-center hover:bg-yellow-300 hover:text-black duration-300"
            >
              Billing & Insurance
            </Link>
          </div>
        </nav>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <p className="text-sm text-black mt-6">© 2025 Hospital Portal</p>
      </div>
    </div>
  );
}

export default ToolBar;
