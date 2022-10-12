import React from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Events from './Events';
import Nav from './Nav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
return ( 

  <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/events" element={<Events />} />
      </Routes>
    </div>
    </Router>
)};

export default App;



//<header className="App-header">Spare Time</header>