// components/EditButton.jsx
import React from 'react';

function EditButton({ onEdit, movieId }) {
  return (
    <button onClick={() => onEdit(movieId)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded transition-colors">
      Editar
    </button>
  );
}

export default EditButton;
