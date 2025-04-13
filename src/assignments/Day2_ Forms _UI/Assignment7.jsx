import React, { useState } from 'react';

const Assignment7 = () => {
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [maturity, setMaturity] = useState(null);


  const handleTenureChange = (e) => {
    const value = e.target.value;
    setTenure(value);

    if (value < 6) setInterestRate(5.0);
    else if (value < 12) setInterestRate(5.5);
    else setInterestRate(6.5);
  };


  const handleCalculate = (e) => {
    e.preventDefault();
    const principal = parseFloat(amount);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(tenure) / 12; 
    const maturityAmount = principal + (principal * rate * time);
    setMaturity(maturityAmount.toFixed(2));
  };

  return (
    <div className="container">
       <h2 className="mb-4">FD Maturity Calculator</h2> 
      <form onSubmit={handleCalculate} className="border p-4 bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Deposit Amount (₹)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tenure (in months)</label>
          <input
            type="number"
            className="form-control"
            value={tenure}
            onChange={handleTenureChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Interest Rate (%)</label>
          <input
            type="text"
            className="form-control"
            value={interestRate}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Calculate Maturity
        </button>
      </form>

      {maturity && (
        <div className="alert alert-success mt-4">
          Maturity Amount: <strong>₹{maturity}</strong>
        </div>
      )}
    </div>
  );
};

export default Assignment7;
