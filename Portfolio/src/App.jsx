import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Homepage from './components/Homepage';
import Welcomepage from './components/Welcomepage';
import './App.css';

function App() {

  return (
    <>
      <Background />
      <Router>
          <Routes>
            <Route path="/" element={<Welcomepage />} />
            <Route path="/home" element={<Homepage />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
