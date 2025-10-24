## Hospital Management System

A modern, full-featured Hospital Management System built with React.js, designed to simplify the management of patients, doctors, appointments, billing, and more.
This system provides an intuitive interface for hospital staff to manage daily operations efficiently from one dashboard.

## Overview

The Hospital Management System allows administrators and staff to handle patient records, manage doctors by specialty, track appointments, and process billing. It is built with scalability, clean UI design, and user experience in mind.

## Features

## Core Modules

Home Page – Displays an overview of hospital activities and quick stats.

About Us – Provides background information about the hospital and its mission.

Patients Records – Manage patient data, registration, updates, and medical history.

Doctors Speciality – View and manage doctors categorized by their specialties.

Doctor Availability – Track and update doctors’ working schedules and availability.

Appointments Management – Create, edit, and cancel patient appointments while displaying both doctor and patient names.

Billing & Insurance – Handle patient billing details and insurance information.

UI & UX

Clean, responsive layout built with Tailwind CSS.

Sidebar navigation for quick access to different modules.


Loading states and user-friendly feedback messages.

## Tech Stack

Technology	Purpose
React.js (Vite)	Frontend framework
Tailwind CSS	Styling and responsiveness
JSON Server	Mock REST API backend
React Router DOM	Client-side routing
Vercel	Deployment and hosting
Project Structure
hospital-management-system/
├── src/
│   ├── components/
│   │   ├── ToolBar.jsx
│   │   └── LayOut.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── PatientsRecords.jsx
│   │   ├── DoctorsSpeciality.jsx
│   │   ├── DoctorAvailability.jsx
│   │   ├── Appointments.jsx
│   │   └── BillingInsurance.jsx
│   ├── main.jsx
│   └── index.css
├── db.json
├── package.json
└── README.md

## Installation & Setup

1. Clone the Repository
git clone git@github.com:Castrokimaru/hospital-management-system.git
cd hospital-management-system

2. Install Dependencies
npm install

3. Set Up JSON Server (Mock Backend)

Run JSON Server to simulate the backend API:

npx json-server --watch db.json --port 5001


The data will be served from http://localhost:5001/

Example endpoints:

/patients

/doctors

/appointments

/billing

4. Start the React App
npm run dev


Your app will run at http://localhost:5173/

Example Data Structure (db.json)
{
  "patients": [
    { "id": 1, "name": "Brian Otieno", "age": 34, "condition": "Flu" }
  ],
  "doctors": [
    { "id": 1, "name": "Dr. Brian Karanja", "speciality": "Cardiology", "available": true }
  ],
  "appointments": [
    { "id": 1, "patientId": 1, "doctorId": 1, "date": "2025-10-24" }
  ],
  "billing": [
    { "id": 1, "patientId": 1, "amount": 200, "status": "Paid" }
  ]
}

## Deployment (Vercel)

To deploy on Vercel:

Push your code to GitHub.

Go to Vercel Dashboard
.

Import your GitHub repository.

Set the build command to:

npm run build


Set the output directory to:

dist


 ## Click Deploy.

For live data, you can host your db.json via a small Express/Node server or continue using JSON Server locally for development.

Key Functional Highlights

Appointments display both doctor and patient names dynamically.

Reusable components ensure maintainable and consistent design.

Data fetching implemented using React hooks (useEffect, useState).

Modular structure makes it easy to add new pages such as pharmacy or staff management in the future.

## Contributors
Name	           Role

Bill Otiende	Frontend Developer,

Castro Kimaru   Backend  Developer,

John Kimani     UI/UX  Designer,

Debora Waweru   Product Manager.

License

This project is licensed under the MIT License
.