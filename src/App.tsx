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
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Start</Link>
        <Link to="/democracy" className={location.pathname === '/democracy' ? 'active' : ''}>Emergent Democracy</Link>
        <Link to="/passport" className={location.pathname === '/passport' ? 'active' : ''}>Human Passport</Link>
        <Routes>
          <Route path="/democracy" element={<Democracy />} />
          <Route path="/passport" element={<Passport />} />
        </Routes>
      </header>
      <div className='page'>
        <p>
          This site reflects a vision on how the post scarcity economy may be achieved by humanity.
          </p>
        <p>
          Here, you can find explanation of such concepts as Emergent democracy, Auto management of a system, Decentralized power, Post scarcity, Passport of human of planet earth.
          </p>
        <p>
          The site intends to provide sufficient tools for any human from planet earth to start participating in Emerging democracy. And thus facilitating faster transition of humanity to post scarcity economy.
          </p>
      </div>
    </div>
  );
}

export default App;
