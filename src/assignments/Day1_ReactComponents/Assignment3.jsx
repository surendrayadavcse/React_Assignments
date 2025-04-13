import React from 'react';

const Assignment3 = () => {
  const name = 'Nandyala Venkata Surendra';
  const totalFDs = 3;
  const totalRDs = 2;
  const totalInvestmentValue = 55000;

  return (
    <div className="card p-4">
      <h2>Customer Investment Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Total FDs:</strong> {totalFDs}</p>
      <p><strong>Total RDs:</strong> {totalRDs}</p>
      <p><strong>Total Investment Value:</strong> ₹{totalInvestmentValue}</p>
    </div>
  );
};

export default Assignment3;
