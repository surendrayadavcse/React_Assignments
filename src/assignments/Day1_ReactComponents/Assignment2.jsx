import React, { useState } from 'react';

const Assignment2 = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const tenure = 12; // months
  const estimatedMaturity = monthlyContribution * tenure * 1.06; // Simple growth

  const handleChange = (e) => {
    setMonthlyContribution(Number(e.target.value));
  };

  return (
    <div className="card p-4">
      <h2>RD Contribution Tracker</h2>
      <div className="mb-3">
        <label className="form-label">Monthly Contribution (₹):</label>
        <input
          type="number"
          className="form-control"
          value={monthlyContribution}
          onChange={handleChange}
        />
      </div>
      <p><strong>Tenure:</strong> {tenure} months</p>
      <p><strong>Total Invested:</strong> ₹{monthlyContribution * tenure}</p>
      <p><strong>Estimated Maturity:</strong> ₹{estimatedMaturity.toFixed(2)}</p>
    </div>
  );
};

export default Assignment2;