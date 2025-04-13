import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Assignment5 = () => {
  return (
    <div>
      <h2 className="mb-4">Assignment 5: User Dashboard Navigation</h2>

      <div className="nav nav-pills mb-3">
        <Link className="nav-link" to="">Overview</Link>
        <Link className="nav-link" to="create-fd">Create FD</Link>
        <Link className="nav-link" to="create-rd">Open RD</Link>
        <Link className="nav-link" to="support">Support</Link>
      </div>

      <Outlet />
    </div>
  );
};

export const Overview = () => { return(<h1>I am overview</h1>) };
export const CreateFD = () => { return(<h1>Create FD</h1>)};
export const CreateRD = () => { return(<h1>CreateRD</h1>) };
export const Support = () => { return(<h1>Support</h1>)};

export default Assignment5;
