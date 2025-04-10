import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Democracy from './Democracy';
import PassportGenerator from './PassportGenerator';
import Passport from './Passport';
import Constitution from './Constitution';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div className='app-header'>
        <Link to="/"> <img src="/assets/logo_002.png" alt="Logo" /> </Link>
        Post Scarcity Economy (vision)
      </div>
      <div className="App-container">
        <nav className="App-sidebar">
          <Link to="/constitution" className={location.pathname === '/constitution' ? 'active' : ''}>Constitution</Link>
          <Link to="/democracy" className={location.pathname === '/democracy' ? 'active' : ''}>Emergent Democracy</Link>
          <Link to="/passport-generator" className={location.pathname === '/passport-generator' ? 'active' : ''}>Passport Generator</Link>
          <Link to="/passport" className={location.pathname === '/passport' ? 'active' : ''}>Passport of Human of Planet Earth</Link>
        </nav>
        <main className="App-content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/democracy" element={<Democracy />} />
            <Route path="/constitution" element={<Constitution />} />
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
