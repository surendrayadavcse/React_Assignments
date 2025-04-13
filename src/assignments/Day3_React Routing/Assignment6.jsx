import React from 'react';
import { useNavigate } from 'react-router-dom';

const investments = [
  { id: 'fd1', type: 'FD', amount: 40000, tenure: 12, rate: 6.5 },
  { id: 'rd1', type: 'RD', amount: 30000, tenure: 24, rate: 5.5 },
  { id: 'fd2', type: 'FD', amount: 65000, tenure: 6, rate: 6.0 },
];

const InvestmentList = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-header text-center">
          <h3 className="mb-0">Investment List</h3>
        </div>
        <ul className="list-group list-group-flush">
          {investments.map((inv) => (
            <li
              key={inv.id}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
              onClick={() => navigate(`/assignment6/investment/${inv.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div>
                <strong>{inv.type}</strong> - ₹{inv.amount}
              </div>
              <span className="badge bg-primary rounded-pill">
                {inv.tenure} months
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InvestmentList;
