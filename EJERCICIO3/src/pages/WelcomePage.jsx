// pages/WelcomePage.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(to right, #4facfe, #00f2fe)', // Degradado azul claro a celeste
    color: 'white',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Botón translúcido
    color: '#fff',
    border: '1px solid white',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      <h2>Bienvenido a la Gestión de Películas</h2>
      <p>Serás redirigido a la pantalla principal en unos segundos...</p>
      <button style={buttonStyle} onClick={() => navigate('/home')}>
        Ir al Inicio
      </button>
    </div>
  );
}

export default WelcomePage;
