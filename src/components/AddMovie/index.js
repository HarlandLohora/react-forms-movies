import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddMovie = (props) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [director, setDirector] = useState("");
  const [hasOscars, setHasOscars] = useState(true);

  const { addMovieFn } = props;
  console.log(uuidv4());
  const actualizarTitle = (event) => {
    console.log("actualizar", event.target.value);
    setTitle(event.target.value);
  };

  const handleRating = (event) => setRating(event.target.value);

  const handleSubmit = (event) => {
    console.log("Enviar datos", event);
    //Prevenir el comportamiento por defecto
    event.preventDefault();
    //Enviamos los datos al componente padre
    addMovieFn({
      _id: uuidv4(),
      title,
      IMDBRating: rating,
      director,
      hasOscars,
    });
    //Limpiamos los inputs
    clearInputs();
  };

  const clearInputs = () => {
    setTitle("");
    setRating("");
    setDirector("");
    setHasOscars(false);
  };

  return (
    <div className="AddMovie">
      <h1>agregar pelicula</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          placeholder="Ingresa el nombre de la pelicula"
          value={title}
          onChange={actualizarTitle}
        />

        <label>Rating</label>
        <input
          placeholder="Rating"
          type="number"
          value={rating}
          onChange={handleRating}
        />

        <label>Director</label>
        <input
          placeholder="Director"
          value={director}
          onChange={(event) => setDirector(event.target.value)}
        />

        <label>Has Oscars?</label>
        <input
          placeholder="Has oscars?"
          type="checkbox"
          checked={hasOscars}
          onChange={(event) => setHasOscars(event.target.checked)}
        />

        <button type="submit">Add movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
