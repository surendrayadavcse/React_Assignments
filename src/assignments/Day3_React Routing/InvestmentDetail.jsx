import React from 'react';
import { useParams } from 'react-router-dom';

const investments = [
  { id: 'fd1', type: 'FD', amount: 40000, tenure: 12, rate: 6.5 },
  { id: 'rd1', type: 'RD', amount: 30000, tenure: 24, rate: 5.5 },
  { id: 'fd2', type: 'FD', amount: 65000, tenure: 6, rate: 6.0 },
];

const InvestmentDetail = () => {
  const { id } = useParams();
  const investment = investments.find((inv) => inv.id === id);

  if (!investment) {
    return <div className="alert alert-danger mt-3">Investment not found</div>;
  }

  return (
    <div className="mt-4">
      <h4>Investment Details</h4>
      <p><strong>Type:</strong> {investment.type}</p>
      <p><strong>Amount:</strong> ₹{investment.amount}</p>
      <p><strong>Tenure:</strong> {investment.tenure} months</p>
      <p><strong>Interest Rate:</strong> {investment.rate}%</p>
    </div>
  );
};

export default InvestmentDetail;
