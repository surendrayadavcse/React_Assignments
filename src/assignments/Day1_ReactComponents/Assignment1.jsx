import React, { useState } from 'react';

const Assignment1 = () => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleView = () => setShowDetail(prev => !prev);

  const depositAmount = 10000;
  const interestRate = 6.5;
  const tenure = 5;
  const maturityAmount = 13700;

  return (
    <div className="card p-4">
      <h2>Fixed Deposit Summary</h2>
      <p>Deposit Amount: ₹{depositAmount}</p>
      <p>Interest Rate: {interestRate}%</p>
      <p>Tenure: {tenure} years</p>
      {showDetail && <p>Maturity Amount: ₹{maturityAmount}</p>}
      <button className="btn btn-primary mt-2" onClick={toggleView}>
        {showDetail ? 'Summary View' : 'Detailed View'}
      </button>
    </div>
  );
};

export default Assignment1;