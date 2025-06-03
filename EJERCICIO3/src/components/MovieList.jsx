import React, { useState } from 'react';
import DeleteButton from './DeleteButton';  // Importar el componente DeleteButton
import EditButton from './EditButton';      // Importar el componente EditButton

function MovieList({ movies, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMovie, setEditedMovie] = useState(null);

  // Función para manejar la edición de una película
  const handleEditClick = (movie) => {
    setIsEditing(true);
    setEditedMovie({ ...movie });  // Asegúrate de que se copia el objeto completo de la película
  };

  // Función para cancelar la edición
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedMovie(null);
  };

  // Función para guardar los cambios en la película editada
  const handleSaveEdit = () => {
    if (editedMovie) {
      onEdit(editedMovie.id, editedMovie);  // Pasar los datos actualizados
      setIsEditing(false);
      setEditedMovie(null);  // Limpiar la película editada
    }
  };

  return (
    <div>
      {isEditing ? (
        <div className="movie-edit-form">
          <h3>Editar Película</h3>
          <input
            type="text"
            value={editedMovie.pelicula}
            onChange={(e) => setEditedMovie({ ...editedMovie, pelicula: e.target.value })}
          />
          <input
            type="text"
            value={editedMovie.genero}
            onChange={(e) => setEditedMovie({ ...editedMovie, genero: e.target.value })}
          />
          <input
            type="number"
            value={editedMovie.estreno}
            onChange={(e) => setEditedMovie({ ...editedMovie, estreno: e.target.value })}
          />
          <input
            type="number"
            value={editedMovie.calificacion}
            onChange={(e) => setEditedMovie({ ...editedMovie, calificacion: e.target.value })}
          />
          <button onClick={handleSaveEdit}>Guardar</button>
          <button onClick={handleCancelEdit}>Cancelar</button>
        </div>
      ) : (
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
                  {/* Usar los componentes DeleteButton y EditButton */}
                  <DeleteButton onDelete={onDelete} movieId={movie.id} />
                  <EditButton onEdit={() => handleEditClick(movie)} />  {/* Pasamos el objeto completo de la película */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MovieList;
