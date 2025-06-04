import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { toast, ToastContainer } from 'react-toastify';

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

  const handleEdit = async (id, updatedMovie) => {
    try {
      const response = await fetch(`https://retoolapi.dev/vmJ8AL/peliculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedMovie),
      });

      if (response.ok) {
        const newMovies = movies.map((movie) =>
          movie.id === id ? updatedMovie : movie
        );
        setMovies(newMovies);
        toast.success('Película actualizada correctamente');
      } else {
        toast.error('Error al actualizar la película');
      }
    } catch (error) {
      toast.error('Error al actualizar la película');
    }
  };

  return (
    <div className="home-container">
      <ToastContainer />
      <h2>Lista de Películas</h2>

      {/* Botón para agregar nueva película */}
      <button
        onClick={() => navigate('/add-movie')}
        className="btn btn-primary"
      >
        Agregar Nueva Película
      </button>

      {/* Botón para regresar al inicio */}
      <button
        onClick={() => navigate('/')}
        className="btn btn-secondary"
        style={{ marginLeft: '10px' }}
      >
        Regresar al inicio
      </button>

      <br />
      <br />

      {/* Lista de películas con función de edición y eliminación */}
      <MovieList
        movies={movies}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default HomePage;
