import React, { useState, useEffect } from 'react';

function MovieUpdateForm({ movieId, movieData, onSave, onCancel }) {
  const [updatedMovie, setUpdatedMovie] = useState({
    pelicula: '',
    genero: '',
    estreno: '',
    calificacion: '',
  });

  // Cuando recibimos los datos de la película, inicializamos el estado
  useEffect(() => {
    if (movieData) {
      setUpdatedMovie({
        pelicula: movieData.pelicula,
        genero: movieData.genero,
        estreno: movieData.estreno,
        calificacion: movieData.calificacion,
      });
    }
  }, [movieData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedMovie({
      ...updatedMovie,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(movieId, updatedMovie);  // Pasamos el id y los datos actualizados al manejador de guardar
  };

  return (
    <div className="movie-edit-form">
      <h3>Editar Película</h3>
      <input
        type="text"
        name="pelicula"
        value={updatedMovie.pelicula}
        onChange={handleChange}
        placeholder="Título"
      />
      <input
        type="text"
        name="genero"
        value={updatedMovie.genero}
        onChange={handleChange}
        placeholder="Género"
      />
      <input
        type="number"
        name="estreno"
        value={updatedMovie.estreno}
        onChange={handleChange}
        placeholder="Año de Estreno"
      />
      <input
        type="number"
        name="calificacion"
        value={updatedMovie.calificacion}
        onChange={handleChange}
        placeholder="Calificación"
      />
      <button onClick={handleSave}>Guardar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default MovieUpdateForm;
