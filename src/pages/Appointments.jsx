import React, { useEffect, useState } from "react";

const AppointmentsManagement = () => {
  // state setup
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const API = "http://localhost:5001";

  // fetch all data
  const fetchAll = () => {
    fetch(`${API}/appointments`).then(r=>r.json()).then(setAppointments);
    fetch(`${API}/patients`).then(r=>r.json()).then(setPatients);
    fetch(`${API}/doctors`).then(r=>r.json()).then(setDoctors);
  };
  useEffect(()=>{fetchAll();},[]);

  // add new appointment
  const add = (a) => {
    fetch(`${API}/appointments`,{
      method:"POST",headers:{"Content-Type":"application/json"},
      body:JSON.stringify(a)
    }).then(()=>fetchAll());
  };

  // edit status
  const edit = (id) => {
    const s = prompt("New status: Confirmed/Pending/Cancelled");
    if(!s) return;
    fetch(`${API}/appointments/${id}`,{
      method:"PATCH",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({status:s})
    }).then(()=>fetchAll());
  };

  // delete one
  const del = (id) => {
    fetch(`${API}/appointments/${id}`,{method:"DELETE"}).then(()=>fetchAll());
  };

  // clear all
  const clearAll = () => {
    fetch(`${API}/appointments`).then(r=>r.json()).then(list=>{
      Promise.all(list.map(a=>fetch(`${API}/appointments/${a.id}`,{method:"DELETE"})))
      .then(()=>fetchAll());
    });
  };

  // helper to get names
  const getName = (list,id)=>list.find(x=>x.id===id)?.name||"Unknown";

  // filter
  const filtered = appointments.filter(a=>{
    const q=search.toLowerCase();
    const matchQ=!q||[a.id,a.patientId,a.doctorId,a.date,
      getName(patients,a.patientId),getName(doctors,a.doctorId)]
      .some(v=>v.toString().toLowerCase().includes(q));
    const matchS=status==="all"||a.status?.toLowerCase()===status.toLowerCase();
    return matchQ&&matchS;
  });

  // form to add
  const [form,setForm]=useState({patientId:"",doctorId:"",date:"",time:"",status:"Pending"});
  const submit=e=>{
    e.preventDefault();
    add({...form,patientId:+form.patientId,doctorId:+form.doctorId});
    setForm({patientId:"",doctorId:"",date:"",time:"",status:"Pending"});
  };

  const colors={Confirmed:"bg-green-100 text-green-700",Pending:"bg-yellow-100 text-yellow-800",Cancelled:"bg-red-100 text-red-700"};

  return (
  <div className="p-6 bg-gray-50 min-h-screen">
    <h1 className="text-2xl font-bold mb-4">Appointments</h1>

    {/* Add & clear form */}
    <form onSubmit={submit} className="flex flex-wrap gap-2 mb-4">
      {["patientId","doctorId","date","time"].map(f=>
        <input key={f} placeholder={f} value={form[f]}
        onChange={e=>setForm({...form,[f]:e.target.value})}
        className="border px-2"/>)}
      <select value={form.status} onChange={e=>setForm({...form,status:e.target.value})} className="border px-2">
        <option>Pending</option><option>Confirmed</option><option>Cancelled</option>
      </select>
      <button className="bg-blue-500 text-white px-3">Add</button>
      <button type="button" onClick={clearAll} className="bg-red-500 text-white px-3">Clear</button>
    </form>

    {/* Search & filter */}
    <div className="flex gap-2 mb-3">
      <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search..." className="border px-3 py-1 w-1/2"/>
      <select value={status} onChange={e=>setStatus(e.target.value)} className="border px-3 py-1">
        <option value="all">All</option><option>Confirmed</option><option>Pending</option><option>Cancelled</option>
      </select>
      <button onClick={fetchAll} className="border px-3">Refresh</button>
    </div>

    {/* Table */}
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full">
        <thead className="bg-blue-600 text-white"><tr>
          {["ID","Patient","Doctor","Date","Time","Status","Actions"].map(h=><th key={h} className="p-2 text-left">{h}</th>)}
        </tr></thead>
        <tbody>
          {filtered.map(a=>(
            <tr key={a.id} className="border-b">
              <td className="p-2">{a.id}</td>
              <td className="p-2">{getName(patients,a.patientId)}</td>
              <td className="p-2">{getName(doctors,a.doctorId)}</td>
              <td className="p-2">{a.date}</td>
              <td className="p-2">{a.time}</td>
              <td className="p-2"><span className={`px-2 py-1 rounded ${colors[a.status]}`}>{a.status}</span></td>
              <td className="p-2"><button onClick={()=>edit(a.id)} className="mr-2 px-2 py-1 bg-amber-300">Edit</button>
              <button onClick={()=>del(a.id)}className="mr-2 px-2 py-1 bg-red-300">Del</button></td>
            </tr>
          ))}
          {filtered.length===0&&<tr><td colSpan="7" className="p-3 text-center text-gray-500">No appointments</td></tr>} 
        </tbody>  
      </table>
    </div>
  </div>);
};

export default AppointmentsManagement;
