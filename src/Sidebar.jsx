import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : 'black',
    fontWeight: isActive ? '600' : '400',
    paddingLeft: '16px',
    borderRadius: '6px',
    backgroundColor: isActive ? 'rgba(0, 123, 255, 0.2)' : 'transparent',
    transition: 'all 0.3s ease',
    boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
  });

  return (
    <div
      className="sidebar bg-info shadow-lg p-4 rounded"
      style={{ width: '280px', minHeight: '200vh', borderRight: '1px solid rgb(233, 236, 240)' }}
    >
      <h4 className="text-white mb-4 text-center font-weight-bold">React  Assignments</h4>
      <ul className="nav flex-column">

        <li><h6 className="text-white font-weight-bold mb-3">Day 1: React Components</h6></li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment1" className="nav-link p-2" style={linkStyle}>
            Fixed Deposit Summary Component
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment2" className="nav-link p-2" style={linkStyle}>
            Recurring Deposit Contribution Tracker
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment3" className="nav-link p-2" style={linkStyle}>
            Customer Investment Profile Component
          </NavLink>
        </li>

        

       
        <li><h6 className="text-white font-weight-bold mt-4 mb-3">Day 2: Forms & UI</h6></li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment7" className="nav-link p-2" style={linkStyle}>
          FD Investment Form
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment8" className="nav-link p-2" style={linkStyle}>
          RD Plan Creation Form
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment9" className="nav-link p-2" style={linkStyle}>
          Bank Branch Selector UI 
          </NavLink>
        </li>
        <li><h6 className="text-white font-weight-bold mt-4 mb-3">Day 3: React Routing</h6></li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment4" className="nav-link p-2" style={linkStyle}>
              FD & RD Management Portal
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment5" className="nav-link p-2" style={linkStyle}>
              User Dashboard Navigation
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment6" className="nav-link p-2" style={linkStyle}>
           Investment Detail Page
          </NavLink>
        </li>
        
        <li><h6 className="text-white font-weight-bold mt-4 mb-3">Day 4: Event Handling & Styling</h6></li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment10" className="nav-link p-2" style={linkStyle}>
            FD Maturity Calculator with Events
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment11" className="nav-link p-2" style={linkStyle}>
            RD Contribution Tracker with Events
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment12" className="nav-link p-2" style={linkStyle}>
            Theme Switcher for Investment Dashboard
          </NavLink>
        </li>

        <li><h6 className="text-white font-weight-bold mt-4 mb-3">Day 5: React Redux</h6></li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment13" className="nav-link p-2" style={linkStyle}>
            FD Account State Management using Redux
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment14" className="nav-link p-2" style={linkStyle}>
            RD Investment Tracker with Redux
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink to="/assignment15" className="nav-link p-2" style={linkStyle}>
            Notifications for Investment Updates
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
