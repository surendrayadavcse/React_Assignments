import React, { useState } from 'react';

const Assignment9 = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const themeClass = darkMode ? 'bg-dark text-white' : 'bg-white text-dark';
  const cardClass = darkMode ? 'bg-secondary text-white' : 'bg-light text-dark';

  return (
    <div className={`container py-4 ${themeClass}`} style={{ minHeight: '100vh' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Theme Switcher</h2>
        <button onClick={toggleTheme} className="btn btn-secondary">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className={`p-4 border rounded ${cardClass}`}>
        <p>
          Click the button to switch between Light and Dark themes.
        </p>
        <p>
          It’s a simple way to make your app feel comfortable for everyone.
        </p>
      </div>
    </div>
  );
};

export default Assignment9;
