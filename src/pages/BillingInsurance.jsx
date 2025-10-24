import React, { useState, useEffect } from 'react';

const BillingInsurance = () => {
  const [billing, setBilling] = useState([]); // Stores billing records
  const [loading, setLoading] = useState(true); // Tracks loading state

  useEffect(() => {
    fetch("http://localhost:5001/billing") // Fetch billing data from server
      .then((res) => res.json())
      .then((data) => { setBilling(data); setLoading(false); }) // Update state and stop loading
      .catch((err) => console.error("Error:", err)); // Log fetch errors
  }, []);

  const pendingPayments = billing.filter(item => item.status === 'Unpaid'); // Filter unpaid invoices
  const todaysCollections = billing.filter(item => item.status === 'Paid'); // Filter paid invoices
  const totalPending = pendingPayments.reduce((sum, item) => sum + item.amount, 0); // Sum unpaid amounts
  const todayTotal = todaysCollections.reduce((sum, item) => sum + item.amount, 0); // Sum paid amounts

  const handleProcessPayment = (billingId, status) => {
    fetch(`http://localhost:5001/billing/${billingId}`, { // Update payment status on server
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: status }) // Send new status
    })
    .then(res => res.json())
    .then(updatedBill => {
      setBilling(prev => prev.map(bill => bill.id === billingId ? updatedBill : bill)); // Update local state
    });
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-xl text-gray-600">Loading billing data...</div> {/* Loading screen */}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Hospital Management System</h1> {/* Header */}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Billing & Insurance</h2> {/* Page title */}
          <p className="text-gray-600">Manage payments and insurance verification</p> {/* Subtitle */}
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-700">Pending Payments</h3>
            <div className="text-2xl font-bold">KSh {totalPending.toLocaleString()}</div> {/* Total unpaid */}
            <p className="text-sm text-gray-600">{pendingPayments.length} outstanding invoices</p> {/* Count */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-700">Today's Collections</h3>
            <div className="text-2xl font-bold">KSh {todayTotal.toLocaleString()}</div> {/* Total paid */}
            <p className="text-sm text-gray-600">{todaysCollections.length} transactions</p> {/* Count */}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-700">Insurance Claims</h3>
            <div className="text-2xl font-bold">{pendingPayments.length}</div> {/* Pending claims */}
            <p className="text-sm text-gray-600">Pending verification</p>
          </div>
        </div>

        {/* Process Payment Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Process Payment</h3>
          <div className="mb-6">
            <h4 className="text-lg font-medium mb-3">Pending Balances</h4>
            <div className="space-y-3">
              {pendingPayments.map(bill => (
                <div key={bill.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                  <div>
                    <p className="font-medium">Patient {bill.patientId}</p> {/* Patient ID */}
                    <p className="text-sm text-gray-600">Invoice #{bill.id}</p> {/* Invoice ID */}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">KSh {bill.amount.toLocaleString()}</p> {/* Amount */}
                    <div className="space-x-2 mt-1">
                      <button 
                        onClick={() => handleProcessPayment(bill.id, 'Paid')} 
                        className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                      >
                        Mark Paid {/* Mark as Paid button */}
                      </button>
                      <button 
                        onClick={() => handleProcessPayment(bill.id, 'Unpaid')} 
                        className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Mark Unpaid {/* Mark as Unpaid button */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History */}
          <div>
            <h4 className="text-lg font-medium mb-3">Transaction History</h4>
            <div className="space-y-2">
              {todaysCollections.map(bill => (
                <div key={bill.id} className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span>Patient {bill.patientId}</span> {/* Patient ID */}
                  <span className="font-semibold text-green-700">KSh {bill.amount.toLocaleString()}</span> {/* Paid amount */}
                  <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">Paid</span> {/* Status */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BillingInsurance; // Export component
