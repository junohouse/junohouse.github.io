import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <nav className="navbar">
          <div className="nav-brand">
            <img src="/logo.png" alt="juno.house" className="nav-logo" />
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="brand-highlight">juno.house</span>
            </h1>
            <p className="hero-subtitle">
              Coming Soon
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
