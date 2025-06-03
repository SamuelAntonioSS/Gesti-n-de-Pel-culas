import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useSaveData } from '../hooks/useSaveData';
import "./MovieForm.css";

function MovieForm({ onAddMovie }) {  // Recibir la función onAddMovie como prop
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const saveData = useSaveData();

  const onSubmit = async (data) => {
    const response = await saveData(data);
    if (response.success) {
      toast.success('Película agregada correctamente!');
      reset();  // Resetea el formulario
      onAddMovie();  // Llama la función para redirigir después de agregar la película
    } else {
      toast.error('Hubo un error al agregar la película.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-white shadow-sm rounded">
      <h3 className="text-center mb-4">Agregar Nueva Película</h3>
      <div className="mb-3">
        <input 
          {...register('pelicula', { required: 'El título es obligatorio' })}
          className="form-control"
          placeholder="Título"
        />
        {errors.pelicula && <p className="text-danger">{errors.pelicula.message}</p>}
      </div>

      <div className="mb-3">
        <input 
          {...register('genero', { required: 'El género es obligatorio' })}
          className="form-control"
          placeholder="Género"
        />
        {errors.genero && <p className="text-danger">{errors.genero.message}</p>}
      </div>

      <div className="mb-3">
        <input 
          {...register('estreno', { required: 'El año de estreno es obligatorio' })}
          className="form-control"
          placeholder="Año de estreno"
        />
        {errors.estreno && <p className="text-danger">{errors.estreno.message}</p>}
      </div>

      <div className="mb-3">
        <input 
          {...register('calificacion', { required: 'La calificación es obligatoria' })}
          className="form-control"
          placeholder="Calificación"
        />
        {errors.calificacion && <p className="text-danger">{errors.calificacion.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary w-100">Guardar Película</button>
    </form>
  );
}

export default MovieForm;
