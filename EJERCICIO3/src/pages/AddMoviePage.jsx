import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';  // Asegúrate de tener este componente
import { toast } from 'react-toastify';

function AddMoviePage() {
  const navigate = useNavigate();

  // Función para manejar la redirección al HomePage después de agregar una película
  const handleAddMovie = () => {
    toast.success('Película agregada correctamente');
    navigate('/home');  // Redirige a la página principal (HomePage)
  };

  // Estilos en línea
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => navigate('/home')}>
        Regresar a la lista de películas
      </button>
      <MovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default AddMoviePage;
