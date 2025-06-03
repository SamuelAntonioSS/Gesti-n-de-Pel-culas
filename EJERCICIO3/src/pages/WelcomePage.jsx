// pages/WelcomePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook de navegación

function WelcomePage() {
  const navigate = useNavigate();

  // Redirigir automáticamente después de unos segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirige a la pantalla de inicio
    }, 3000); // Redirige después de 3 segundos
    return () => clearTimeout(timer); // Limpiar el timer al desmontar el componente
  }, [navigate]);

  return (
    <div className="welcome-container">
      <h2>Bienvenido a la Gestión de Películas</h2>
      <p>Serás redirigido a la pantalla principal en unos segundos...</p>
      <button onClick={() => navigate('/home')}>Ir al Inicio</button>
    </div>
  );
}

export default WelcomePage;
