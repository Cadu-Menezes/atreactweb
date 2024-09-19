// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Parte1 from './Pages/Parte1';
import Parte2 from './Pages/Parte2';
import Parte3 from './Pages/Parte3';
import Parte4 from './Pages/Parte4';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Parte1 />} />
                <Route path="/parte2" element={<Parte2 />} />
                <Route path="/parte3" element={<Parte3 />} />
                <Route path="/parte4" element={<Parte4 />} />
            </Routes>
        </Router>
    );
}

export default App;
