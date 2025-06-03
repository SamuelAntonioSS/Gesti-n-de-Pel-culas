// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';  // Página para agregar nuevas películas


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-movie" element={<AddMoviePage />} />  {/* Página para agregar nueva película */}

      </Routes>
    </Router>
  );
}

export default App;
