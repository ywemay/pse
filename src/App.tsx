import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Democracy from './Democracy';
import PassportGenerator from './PassportGenerator';
import Passport from './Passport';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className="App-container">
        <nav className="App-sidebar">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Start</Link>
          <Link to="/democracy" className={location.pathname === '/democracy' ? 'active' : ''}>Emergent Democracy</Link>
          <Link to="/passport-generator" className={location.pathname === '/passport-generator' ? 'active' : ''}>Passport Generator</Link>
          <Link to="/passport" className={location.pathname === '/passport' ? 'active' : ''}>Passport of Human of Planet Earth</Link>
        </nav>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/democracy" element={<Democracy />} />
            <Route path="/passport" element={<Passport />} />
            <Route path="/passport-generator" element={<PassportGenerator />} />
          </Routes>
          <div className='page'>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
