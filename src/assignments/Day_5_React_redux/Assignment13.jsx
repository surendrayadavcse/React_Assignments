import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFD, markMatured } from '../redux/fdSlice';
import { addNotification } from '../redux/notificationSlice';
import { useEffect } from 'react';
const Assignment13 = () => {
  useEffect(() => {
       
    window.scrollTo(0, 0);
  })
  const [amount, setAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [rate, setRate] = useState('');
  const dispatch = useDispatch();
  const fdList = useSelector(state => state.fixedDeposits);

  const handleAddFD = () => {
     
    const newFD = {
      id: Date.now(),
      amount,
      tenure,
      rate,
      status: 'Active',
    };
    dispatch(addFD(newFD));
    dispatch(addNotification(`New FD Created with amount ₹${amount}`));
    setAmount('');
    setTenure('');
    setRate('');
  };

  const handleMature = (id) => {
    dispatch(markMatured(id));
    dispatch(addNotification(`FD with ID ${id} marked as Matured`));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">FD Account State Management</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Tenure"
            value={tenure}
            onChange={e => setTenure(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Interest Rate"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
        </div>
      </div>

      <button className="btn btn-primary" onClick={handleAddFD}>Add FD</button>

      <h3 className="mt-5">FD List</h3>
      <ul className="list-group">
        {fdList.map(fd => (
          <li key={fd.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>₹{fd.amount}, {fd.tenure} years, {fd.rate}% - {fd.status}</span>
            {fd.status !== 'Matured' && (
              <button
                className="btn btn-warning"
                onClick={() => handleMature(fd.id)}
              >
                Mark Matured
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignment13;
