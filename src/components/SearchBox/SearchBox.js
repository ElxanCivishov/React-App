import React, { useState } from "react";

import ResultCart from "../ResultCard/ResultCart";
import Favorites from "../Favorites/Favorites";

import "./SearchBox.css";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setInput(e.target.value);

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=e4d71eac5d3f1a72564a09ad457e7bfd&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-content">
          <img
            src="https://media.newyorker.com/photos/5b23d8ad0a4f5b3d66492b14/master/pass/Tolentino-Coco.jpg"
            alt="Tolentino-Coco.jpg"
          />
          <div className="titles">
            <h1>Xoş Gəldiniz.</h1>
            <h2>Milyonlarla film. Indi Axtarın.</h2>
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              value={input}
              onChange={onChange}
              placeholder="Film , kino  ara..."
            />
          </div>
        </div>
        <div className="search-results-container">
          <div className="search-results">
            {results.length > 0 &&
              results.map((movie) => (
                <ResultCart movie={movie} key={movie.id} />
              ))}
          </div>
          <div className="search-favorites">
            <div className="container-favorites">
              <Favorites />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
