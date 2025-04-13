import React, { useState } from 'react';
import { useEffect } from 'react';
const branches = [
  {
    name: 'Kadapa- kamalapuram',
    address: 'aksa nagar,kadapa',
    code: 'HYD001',
    ifsc: 'BANK0001HYD',
  },
  {
    name: 'Nandyala - bijili',
    address: 'near bijili',
    code: 'BLR002',
    ifsc: 'BANK0002BLR',
  },
  {
    name: 'Bengaluru',
    address: 'Near mg road',
    code: 'MUM003',
    ifsc: 'BANK0003MUM',
  },
];

const Assignment12 = () => {
   useEffect(() => {
     
      window.scrollTo(0, 0);
    })
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleSelect = (e) => {
    const branch = branches.find(b => b.name === e.target.value);
    setSelectedBranch(branch);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Bank Branch Selector</h3>

      <div className="mb-3">
        <label className="form-label">Select a Branch</label>
        <select className="form-select" onChange={handleSelect} defaultValue="">
          <option value="" disabled>-- Choose a branch --</option>
          {branches.map((branch, idx) => (
            <option key={idx} value={branch.name}>{branch.name}</option>
          ))}
        </select>
      </div>

      {selectedBranch && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{selectedBranch.name}</h5>
            <p><strong>Address:</strong> {selectedBranch.address}</p>
            <p><strong>Branch Code:</strong> {selectedBranch.code}</p>
            <p><strong>IFSC:</strong> {selectedBranch.ifsc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment12;
