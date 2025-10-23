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

  
};

// Export the component so it can be imported and used in other parts of the app
export default DoctorAvailability;
