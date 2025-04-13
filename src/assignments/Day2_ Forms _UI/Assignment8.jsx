import React, { useState, useEffect } from 'react';

const Assignment8 = () => {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);
  const [tenure, setTenure] = useState(12);
  const [interestRate] = useState(6.5); // fixed rate
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [maturityAmount, setMaturityAmount] = useState(0);

  const calculateMaturity = () => {
    const r = interestRate / 400; // quarterly
    const n = tenure;
    const maturity =
      monthlyContribution *
      (((Math.pow(1 + r, n) - 1) / (1 - Math.pow(1 + r, -1))) * (1 + r));
    setTotalInvestment(monthlyContribution * tenure);
    setMaturityAmount(maturity.toFixed(2));
  };

  useEffect(() => {
    calculateMaturity();
  }, [monthlyContribution, tenure]);

  const increment = () => setMonthlyContribution(prev => prev + 500);
  const decrement = () => setMonthlyContribution(prev => (prev > 500 ? prev - 500 : prev));

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20, fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>RD Contribution Tracker</h2>

      <div style={{ padding: 15, border: '1px solid #ccc', borderRadius: 6 }}>
        <div style={{ marginBottom: 15 }}>
          <label>Monthly Contribution (₹)</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 5 }}>
            <button onClick={decrement}>-</button>
            <span>{monthlyContribution}</span>
            <button onClick={increment}>+</button>
          </div>
        </div>

        <div style={{ marginBottom: 15 }}>
          <label>Tenure (months)</label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            min="1"
            style={{ width: '100%', padding: 5, marginTop: 5 }}
          />
        </div>

        <div style={{ marginBottom: 15 }}>
          <label>Interest Rate (%)</label>
          <input
            type="text"
            value={interestRate}
            readOnly
            style={{ width: '100%', padding: 5, marginTop: 5 }}
          />
        </div>

        <div style={{ background: '#f0f8ff', padding: 10, marginBottom: 10 }}>
          <strong>Total Investment:</strong> ₹{totalInvestment}
        </div>
        <div style={{ background: '#e6ffe6', padding: 10 }}>
          <strong>Maturity Amount:</strong> ₹{maturityAmount}
        </div>
      </div>
    </div>
  );
};

export default Assignment8;
