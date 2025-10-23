import React, { useState, useEffect } from 'react';

const BillingInsurance = () => {
  const [billing, setBilling] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/billing")
      .then((res) => res.json())
      .then((data) => { setBilling(data); setLoading(false); })
      .catch((err) => console.error("Error:", err));
  }, []);

  const pendingPayments = billing.filter(item => item.status === 'Unpaid');
  const todaysCollections = billing.filter(item => item.status === 'Paid');
  const totalPending = pendingPayments.reduce((sum, item) => sum + item.amount, 0);
  const todayTotal = todaysCollections.reduce((sum, item) => sum + item.amount, 0);

  const handleProcessPayment = (billingId, status) => {
    fetch(`http://localhost:5001/billing/${billingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status })
    })
    .then(res => res.json())
    .then(updatedBill => {
      setBilling(prev => prev.map(bill => bill.id === billingId ? updatedBill : bill));
    });
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading billing data...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Hospital Management System</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Billing & Insurance</h2>
          <p className="text-gray-600">Manage payments and insurance verification</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-700">Pending Payments</h3>
            <div className="text-2xl font-bold">KSh {totalPending.toLocaleString()}</div>
            <p className="text-sm text-gray-600">{pendingPayments.length} outstanding invoices</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-700">Today's Collections</h3>
            <div className="text-2xl font-bold">KSh {todayTotal.toLocaleString()}</div>
            <p className="text-sm text-gray-600">{todaysCollections.length} transactions</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-700">Insurance Claims</h3>
            <div className="text-2xl font-bold">{pendingPayments.length}</div>
            <p className="text-sm text-gray-600">Pending verification</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Process Payment</h3>
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Pending Balances</h4>
            <div className="space-y-3">
              {pendingPayments.map(bill => (
                <div key={bill.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">Patient {bill.patientId}</p>
                    <p className="text-sm text-gray-600">Invoice #{bill.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">KSh {bill.amount.toLocaleString()}</p>
                    <div className="space-x-2 mt-1">
                      <button 
                        onClick={() => handleProcessPayment(bill.id, 'Paid')} 
                        className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Mark Paid
                      </button>
                      <button 
                        onClick={() => handleProcessPayment(bill.id, 'Unpaid')} 
                        className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Mark Unpaid
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">Transaction History</h4>
            <div className="space-y-2">
              {todaysCollections.map(bill => (
                <div key={bill.id} className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span>Patient {bill.patientId}</span>
                  <span className="font-semibold text-green-700">KSh {bill.amount.toLocaleString()}</span>
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Paid</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BillingInsurance;