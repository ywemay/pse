import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Democracy from './Democracy';
import Passport from './Passport';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        {/* Conditionally apply the active class based on the current route */}
        <Link to="/democracy" className={location.pathname === '/democracy' ? 'active' : ''}>Democracy</Link>
        <Link to="/passport" className={location.pathname === '/passport' ? 'active' : ''}>Passport</Link>
        <Routes>
          <Route path="/democracy" element={<Democracy />} />
          <Route path="/passport" element={<Passport />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
