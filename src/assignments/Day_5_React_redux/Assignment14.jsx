import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRD, updateContribution } from '../redux/rdSlice';
import { addNotification } from '../redux/notificationSlice';
import { useEffect } from 'react';
const Assignment14 = () => {
  useEffect(() => {
       
    window.scrollTo(0, 0);
  })
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();
  const rdList = useSelector(state => state.recurringDeposits);

  const handleAddRD = () => {
    
    const newRD = {
      id: Date.now(),
      monthlyContribution: parseFloat(amount),
    };
    dispatch(addRD(newRD));
    dispatch(addNotification(`New RD Created with ₹${amount} contribution`));
    setAmount('');
  };

  const handleUpdate = (id, value) => {
    dispatch(updateContribution({ id, amount: parseFloat(value) }));
    dispatch(addNotification(`RD ${id} contribution updated to ₹${value}`));
  };

  const totalMaturity = rdList.reduce((total, rd) => total + (rd.monthlyContribution * 12), 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center">RD Investment Tracker</h2>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Monthly Contribution</label>
        <input 
          id="amount" 
          type="number" 
          className="form-control" 
          placeholder="Enter monthly contribution" 
          value={amount} 
          onChange={e => setAmount(e.target.value)} 
        />
      </div>
      <div className="text-center mb-4">
        <button 
          className="btn btn-primary" 
          onClick={handleAddRD} 
          disabled={!amount || isNaN(amount) || parseFloat(amount) <= 0}
        >
          Add RD
        </button>
      </div>

      <h3>RD List</h3>
      <ul className="list-group">
        {rdList.map(rd => (
          <li key={rd.id} className="list-group-item d-flex justify-content-between align-items-center">
            ₹
            <input 
              className="form-control w-25" 
              type="number" 
              value={rd.monthlyContribution} 
              onChange={e => handleUpdate(rd.id, e.target.value)} 
            /> 
            <span className="badge bg-info rounded-pill">RD {rd.id}</span>
          </li>
        ))}
      </ul>

      <h3 className="mt-4">Total Maturity Amount (after 12 months): ₹{totalMaturity}</h3>
    </div>
  );
};

export default Assignment14;
