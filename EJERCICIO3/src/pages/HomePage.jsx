// pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../components/MovieForm';
import MovieList from '../components/MovieList';
import { toast } from 'react-toastify';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Aquí deberías hacer una llamada a la API para obtener las películas
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

  const goBack = () => {
    navigate('/welcome');
  };

  return (
    <div className="home-container">
      <button className="back-button" onClick={goBack}>Regresar a Bienvenida</button>
      <MovieForm />
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
