import React from 'react';

function DeleteButton({ onDelete, movieId }) {
  return (
    <button onClick={() => onDelete(movieId)} className="delete-button">
      Eliminar
    </button>
  );
}

export default DeleteButton;
