import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const totalAssignments = 15;
  const assignmentsPerDay = 3;
  const days = Math.ceil(totalAssignments / assignmentsPerDay);

  const getAssignmentsForDay = (day) => {
    const start = (day - 1) * assignmentsPerDay + 1;
    const end = Math.min(day * assignmentsPerDay, totalAssignments);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div 
      className="sidebar bg-info shadow-lg p-4 rounded"
      style={{ 
        width: '240px',
        minHeight: '200vh',
        borderRight: '1px solid rgb(233, 236, 240)',
      }}
    >
      <h4 className="text-white mb-4 text-center font-weight-bold">React Assignments</h4>
      <ul className="nav flex-column">
        {Array.from({ length: days }, (_, dayIndex) => (
          <li key={dayIndex}>
            <h6 className="text-white font-weight-bold mb-3">Day {dayIndex + 1}</h6>
            <ul className="list-unstyled">
              {getAssignmentsForDay(dayIndex + 1).map((assignment) => (
                <li className="nav-item mb-2" key={assignment}>
                  <NavLink
                    to={`/assignment${assignment}`}
                    className="nav-link p-2"
                    style={({ isActive }) => ({
                      color: isActive ? 'white' : 'black',
                      fontWeight: isActive ? '600' : '400',
                      paddingLeft: '16px',
                      borderRadius: '6px',
                      backgroundColor: isActive ? 'rgba(0, 123, 255, 0.2)' : 'transparent',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    })}
                  >
                    Assignment {assignment}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
