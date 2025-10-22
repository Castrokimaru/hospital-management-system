import React from 'react';
import {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
i


function ToolBar () {




    return (
    <div className="h-screen w-1/5 bg-blue-300 shadow-lg rounded-r-2xl p-6 ml-0 flex flex-col justify-between border-r border-gray-200">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-blue-700"><b>⚕️ MEDICARE</b></h2>
        <h5 className="text-xl mb-6 text-blue-700">Front Office Portal</h5>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-5 ">
          <Link to="/" className="text-white hover:text-blue-600 font-medium">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-600 font-medium">About Us</Link>
          <Link to="/appointments"  className="text-white hover:text-blue-600 font-medium">Appointments</Link>
          <Link to="/doctors"  className="text-white hover:text-blue-600 font-medium">Doctors & Specialties</Link>
          <Link to="/availability"  className="text-white hover:text-blue-600 font-medium">Doctor Availability</Link>
          <Link to="/services"  className="text-white hover:text-blue-600 font-medium">Services</Link>
          <Link to="/records"  className="text-white hover:text-blue-600 font-medium">Patient Records</Link>
          <Link to="/billing" className="bg-yellow-200 rounded-3xl py-3 px-8 font-medium  inline-block  mr-4 hover:bg-transparent hover:border-black 
           hover:text-white duration-300 hover:border border border-transparent">Billing & Insurance</Link>
        </nav>
      </div>
      <button className="bg-blue-200 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        <Link to="/login"> Doctor's Plaza Login</Link>
      </button>

      {/* Footer */}
      <div className="text-sm text-black text-center mt-8">
        © 2025 Hospital Portal
      </div>
    </div>

  





    )




}


export default ToolBar;