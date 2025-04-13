import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Assignment15 = () => {
   useEffect(() => {
     
      window.scrollTo(0, 0);
    })
  const notifications = useSelector(state => state.notifications);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Notifications for Investment Updates</h2>
      <div className="list-group">
        {notifications.map((note, index) => (
          <div key={index} className="list-group-item">
            {note}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignment15;
