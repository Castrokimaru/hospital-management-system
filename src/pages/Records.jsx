import React, { useState, useEffect } from "react";

const PatientRecords = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [patients, setPatients] = useState([]);

  // Hardcoded patient data
  const basePatients = [
    { id: 1, name: "Brian Otieno", age: 32, gender: "Male", phone: "0721345678", email: "b.otieno@example.com", diagnosis: "Malaria", doctorId: 2 },
    { id: 2, name: "Faith Wanjiku", age: 26, gender: "Female", phone: "0702456789", email: "f.wanjiku@example.com", diagnosis: "Allergy", doctorId: 1 },
    { id: 3, name: "George Mwangi", age: 41, gender: "Male", phone: "0710456723", email: "g.mwangi@example.com", diagnosis: "Hypertension", doctorId: 4 },
    { id: 4, name: "Cynthia Achieng", age: 29, gender: "Female", phone: "0745123456", email: "c.achieng@example.com", diagnosis: "Asthma", doctorId: 3 },
    { id: 5, name: "Daniel Kiptoo", age: 35, gender: "Male", phone: "0798123445", email: "d.kiptoo@example.com", diagnosis: "Fracture", doctorId: 6 },
    { id: 6, name: "Mercy Naliaka", age: 22, gender: "Female", phone: "0711345629", email: "m.naliaka@example.com", diagnosis: "Migraine", doctorId: 5 },
    { id: 7, name: "Samuel Mutua", age: 48, gender: "Male", phone: "0702123444", email: "s.mutua@example.com", diagnosis: "Diabetes", doctorId: 4 },
    { id: 8, name: "Lucy Wairimu", age: 30, gender: "Female", phone: "0726123490", email: "l.wairimu@example.com", diagnosis: "Pregnancy Check-up", doctorId: 8 },
  ];