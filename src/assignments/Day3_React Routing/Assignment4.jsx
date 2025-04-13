import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';




export const RDSummary = () => {
  return (
    <div>
      <h4>RD Summary</h4>
      <p>This is a summary of recurring deposits.</p>
    </div>
  );
};


export const InvestmentHistory = () => {
  return (
    <div>
      <h4>Investment History</h4>
      <ul>
        <li>FD - ₹10,000 for 6 months</li>
        <li>RD - ₹2,000 monthly for 12 months</li>
      </ul>
    </div>
  );
};

 
import { Outlet } from 'react-router-dom';

const Assignment4 = () => {
  return (
    <div>
      <h2 className="mb-3">Assignment 4: FD & RD Management Portal</h2>

      <nav className="nav nav-tabs mb-3">
        <Link className="nav-link" to="">Home</Link>
        <Link className="nav-link" to="fixed-deposit">FD Calculator</Link>
        <Link className="nav-link" to="recurring-deposit">RD Summary</Link>
        <Link className="nav-link" to="investment-history">Investment History</Link>
      </nav>

      <Outlet /> 
    </div>
  );
};


export default Assignment4;
