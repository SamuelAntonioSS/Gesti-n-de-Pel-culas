// components/MovieList.jsx
function MovieList({ movies }) {
    return (
      <div className="movie-list-container">
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
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.pelicula}</td>
                <td>{movie.genero}</td>
                <td>{movie.estreno}</td>
                <td>{movie.calificacion}</td>
                <td>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default MovieList;
  