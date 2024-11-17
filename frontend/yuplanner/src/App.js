import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';

import AppBar from './components/AppBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login/>}>
            {}
          </Route>
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
