import React, { useState } from 'react';
import { useEffect } from 'react';
const Assignment10 = () => {
  useEffect(() => {
   
    window.scrollTo(0, 0);
  })
  const [formData, setFormData] = useState({
    amount: '',
    tenure: '',
    rate: 6.5,
  });

  const [maturityAmount, setMaturityAmount] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const calculateMaturity = (e) => {
    e.preventDefault();
    const { amount, tenure, rate } = formData;
    const P = parseFloat(amount);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(tenure) / 12;

    if (isNaN(P) || isNaN(t)) {
      setMaturityAmount('Invalid input');
      return;
    }

    const maturity = P + (P * r * t);
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">FD Investment Form</h3>
      <form onSubmit={calculateMaturity}>
        <div className="mb-3">
          <label className="form-label">Deposit Amount (₹)</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tenure (in months)</label>
          <input
            type="number"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interest Rate (%)</label>
          <input
            type="text"
            name="rate"
            value={formData.rate}
            className="form-control"
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-secondary">Calculate Maturity</button>
      </form>

      {maturityAmount && (
        <div className="alert alert-info mt-4">
          Maturity Amount: ₹{maturityAmount}
        </div>
      )}
    </div>
  );
};

export default Assignment10;
