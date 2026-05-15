import React from 'react';
import './Loader.css';

const Loader = () => (
  <div className="loader">
    <div className="loader-inner">
      <div className="loader-logo">AM</div>
      <div className="loader-bar">
        <div className="loader-fill" />
      </div>
      <p className="loader-text">
        <span className="mono">Initializing portfolio</span>
        <span className="dots">...</span>
      </p>
    </div>
  </div>
);

export default Loader;
