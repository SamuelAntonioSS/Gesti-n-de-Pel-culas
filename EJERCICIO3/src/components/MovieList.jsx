import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { ToastContainer, toast } from 'react-toastify';  // Aquí agregas toast
import './MovieList.css';

function MovieList({ movies, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState(null);

  const handleEditClick = (movie) => {
    setIsEditing(true);
    setEditedMovie({ ...movie });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedMovie(null);
  };

  const handleSaveEdit = () => {
    if (editedMovie) {
      if (
        !editedMovie.pelicula.trim() ||
        !editedMovie.genero.trim() ||
        !editedMovie.estreno ||
        !editedMovie.calificacion
      ) {
        toast.error('Por favor, completa todos los campos antes de guardar.');
        return;
      }
      onEdit(editedMovie.id, editedMovie);
      setIsEditing(false);
      setEditedMovie(null);
    }
  };

  return (
    <div>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Año</th>
            <th>Calificación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.pelicula}</td>
              <td>{movie.genero}</td>
              <td>{movie.estreno}</td>
              <td>{movie.calificacion}</td>
              <td>
                <DeleteButton onDelete={() => onDelete(movie.id)} />
                <EditButton onEdit={() => handleEditClick(movie)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Editar Película</h3>
            <input
              type="text"
              value={editedMovie.pelicula}
              onChange={(e) => setEditedMovie({ ...editedMovie, pelicula: e.target.value })}
              placeholder="Título"
            />
            <input
              type="text"
              value={editedMovie.genero}
              onChange={(e) => setEditedMovie({ ...editedMovie, genero: e.target.value })}
              placeholder="Género"
            />
            <input
              type="number"
              value={editedMovie.estreno}
              onChange={(e) => setEditedMovie({ ...editedMovie, estreno: e.target.value })}
              placeholder="Año"
            />
            <input
              type="number"
              value={editedMovie.calificacion}
              onChange={(e) => setEditedMovie({ ...editedMovie, calificacion: e.target.value })}
              placeholder="Calificación"
            />
            <button onClick={handleSaveEdit}>Guardar</button>
            <button onClick={handleCancelEdit}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieList;
