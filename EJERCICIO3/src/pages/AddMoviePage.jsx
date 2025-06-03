import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';  // Componente para agregar película
import { toast } from 'react-toastify';

function AddMoviePage() {
  const navigate = useNavigate();

  // Función para manejar la redirección al HomePage después de agregar una película
  const handleAddMovie = () => {
    toast.success('Película agregada correctamente');
    navigate('/home');  // Redirige a la página principal (HomePage)
  };

  return (
    <div className="add-movie-container">
      <button className="back-button" onClick={() => navigate('/home')}>Regresar a la lista de películas</button>
      <MovieForm onAddMovie={handleAddMovie} />  {/* Pasa la función de redirección al formulario */}
    </div>
  );
}

export default AddMoviePage;
