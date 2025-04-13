import React, { useState } from 'react';
import { useEffect } from 'react';
const Assignment11 = () => {
   useEffect(() => {
     
      window.scrollTo(0, 0);
    })
  const [formData, setFormData] = useState({
    contribution: '',
    tenure: '',
    bank: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">RD Plan Creation Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Monthly Contribution (₹)</label>
          <input
            type="number"
            name="contribution"
            value={formData.contribution}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Tenure (Months)</label>
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
          <label className="form-label">Bank Name</label>
          <input
            type="text"
            name="bank"
            value={formData.bank}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Submit</button>
      </form>

      {submittedData && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">RD Summary</h5>
            <p><strong>Monthly Contribution:</strong> ₹{submittedData.contribution}</p>
            <p><strong>Tenure:</strong> {submittedData.tenure} months</p>
            <p><strong>Bank Name:</strong> {submittedData.bank}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignment11;
