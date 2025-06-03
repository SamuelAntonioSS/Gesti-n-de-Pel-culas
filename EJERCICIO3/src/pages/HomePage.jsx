import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { toast } from 'react-toastify';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://retoolapi.dev/vmJ8AL/peliculas');
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      toast.error('Error al cargar las películas');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://retoolapi.dev/vmJ8AL/peliculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMovies(movies.filter((movie) => movie.id !== id));
        toast.success('Película eliminada con éxito');
      } else {
        toast.error('Error al eliminar la película');
      }
    } catch (error) {
      toast.error('Error al eliminar la película');
    }
  };

  const handleEdit = (movieId) => {
    navigate(`/edit-movie/${movieId}`);  // Redirige a la página de edición
  };

  return (
    <div className="home-container">
      <h2>Lista de Películas</h2>
      <button onClick={() => navigate('/add-movie')} className="btn btn-primary">
        Agregar Nueva Película
      </button>
      <br></br>
      <br></br>
      <button onClick={() => navigate('/')} className="btn btn-primary">
        Regresar al inicio
      </button>
      <MovieList
        movies={movies}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default HomePage;
