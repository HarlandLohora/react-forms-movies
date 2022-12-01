import React, { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import moviesDataJSON from "./movies-data.json";

const App = () => {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [backupMovies, setBackUpMovies] = useState(moviesDataJSON);
  //Estado para mostrar/ocultar el addMovie
  const [showAdd, setShowAdd] = useState(false);
  const [opt, setOpt] = useState("");

  const addMovieFn = (data) => {
    console.log("Agregar pelicula", data);
    console.log();
    //const newArray = [...array, newObj]
    const newMovies = [...backupMovies, data];
    setMovies(newMovies);
    setBackUpMovies(newMovies);
    filtrarDatos(opt, newMovies);
  };

  const handleSelectChange = (event) => {
    //event.target.value contiene la opción elegida
    // const value = event.target.value es lo mismo que lo siguiente
    const { value } = event.target;
    filtrarDatos(value, backupMovies);
    setOpt(value);
  };

  const filtrarDatos = (letra, movies) => {
    //Filtramos los datos
    if (letra === "all") {
      setMovies(movies);
      return;
    }
    const results = movies.filter((movie) => movie.title[0] === letra);
    setMovies(results);
  };

  return (
    <div className="App">
      {/* Modifica el estado showAdd */}
      <button onClick={() => setShowAdd((valorActual) => !valorActual)}>
        Add movie
      </button>
      {/* Dependiendo del valor de showAdd mostrar/ocultar */}
      {showAdd && <AddMovie addMovieFn={addMovieFn} />}
      {/* Filtro de peliculas */}
      <div>
        <select onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
