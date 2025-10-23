// Import React to define and render the component
import React from "react";

// Functional component to display doctors and their availability
const DoctorAvailability = () => {
  // Static data: List of doctors with their ID, name, specialty, and working schedule
  const doctors = [
    { id: 1, name: "Dr. Alice Wambui", specialty: "Dermatologist", availability: "Mon-Fri 9am-3pm" },
    { id: 2, name: "Dr. Brian Karanja", specialty: "General Practitioner", availability: "Tue-Sat 10am-6pm" },
    { id: 3, name: "Dr. Cynthia Ouma", specialty: "Pediatrician", availability: "Mon-Fri 8am-4pm" },
    { id: 4, name: "Dr. George Maina", specialty: "Cardiologist", availability: "Mon, Wed, Fri 9am-2pm" },
    { id: 5, name: "Dr. Mercy Cherono", specialty: "Neurologist", availability: "Tue-Fri 10am-5pm" },
    { id: 6, name: "Dr. David Kipruto", specialty: "Orthopedic Surgeon", availability: "Mon-Sat 9am-5pm" },
    { id: 7, name: "Dr. Agnes Mutheu", specialty: "Physiotherapist", availability: "Mon-Fri 8am-4pm" },
    { id: 8, name: "Dr. Lucy Achieng", specialty: "Gynecologist", availability: "Mon-Sat 9am-4pm" },
    { id: 9, name: "Dr. Peter Omondi", specialty: "Dentist", availability: "Tue-Sat 10am-6pm" },
    { id: 10, name: "Dr. Irene Mwikali", specialty: "Psychiatrist", availability: "Mon-Fri 8am-3pm" },
  ];

  return (
    // Outer container: adds padding and background color using Tailwind CSS
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor Availability</h1>
      
      {/* Description below the title */}
      <p className="text-gray-600 mb-6">View all available doctors and their schedules</p>

      {/* Table container: scrollable horizontally and styled with shadow & rounded corners */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        
        {/* Table element displaying doctor data */}
        <table className="min-w-full border-collapse">
          
          {/* Table header: blue background with white text */}
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Doctor ID</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Specialty</th>
              <th className="px-4 py-3 text-left">Availability</th>
            </tr>
          </thead>

          {/* Table body: maps through each doctor and creates a row */}
          <tbody>
            {doctors.map((doctor) => (
              // Each row uses doctor ID as a unique key
              <tr key={doctor.id} className="border-b hover:bg-gray-50 transition">
                {/* Doctor ID */}
                <td className="px-4 py-3 font-medium text-gray-700">{doctor.id}</td>

                {/* Doctor Name */}
                <td className="px-4 py-3">{doctor.name}</td>

                {/* Doctor Specialty */}
                <td className="px-4 py-3">{doctor.specialty}</td>

                {/* Doctor Availability Schedule */}
                <td className="px-4 py-3 text-gray-600">{doctor.availability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Export the component so it can be imported and used in other parts of the app
export default DoctorAvailability;
