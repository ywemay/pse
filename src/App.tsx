import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Democracy from './Democracy';
import Passport from './Passport';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/democracy">Democracy</Link>
        <Link to="/passport">Passport</Link>
        <Routes>
          <Route path="/democracy" element={<Democracy />} />
          <Route path="/passport" element={<Passport />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
