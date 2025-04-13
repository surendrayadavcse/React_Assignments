import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div 
      className="sidebar bg-info shadow-lg p-4 rounded"
      style={{ 
        width: '240px',
        minHeight: '200vh',
        borderRight: '1px solidrgb(233, 236, 240)',
      }}
    >
      <h4 className="text-white mb-4 text-center font-weight-bold">React Assignments</h4>
      <ul className="nav flex-column">
        {Array.from({ length: 15 }, (_, i) => (
          <li className="nav-item mb-3" key={i}>
            <NavLink 
              to={`/assignment${i + 1}`} 
              className="nav-link p-3"
              style={({ isActive }) => ({
                color: isActive ? 'white' : 'black',
                fontWeight: isActive ? '600' : '400',
                paddingLeft: '16px',
                borderRadius: '8px',
                backgroundColor: isActive ? 'rgba(0, 123, 255, 0.2)' : 'transparent',
                transition: 'all 0.3s ease',
                boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
              })}
            >
              Assignment {i + 1}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
