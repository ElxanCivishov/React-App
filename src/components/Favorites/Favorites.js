import React, { useContext, useState } from "react";

import { GlobalContext } from "../../context/globalContext";

import "./Favorites.css";

const Favorites = () => {
  const {
    FavoritesList,
    addMoviesToFavoritesListFolders,
    removeMovieFromFavoritesList,
  } = useContext(GlobalContext);

  const [inputValue, setInputValue] = useState("");

  let disabledBtn = true;

  inputValue !== "" && FavoritesList.length > 0
    ? (disabledBtn = false)
    : (disabledBtn = true);

  function onChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="favorites">
      <div className="favorite__header">
        <input
          onChange={onChange}
          value={inputValue}
          placeholder="List name for movies"
          className="favorites__name"
        />
        <button
          onClick={() => {
            setInputValue("");
            addMoviesToFavoritesListFolders(inputValue, FavoritesList);
          }}
          type="button"
          disabled={disabledBtn}
          className="favorites__save"
        >
          Save
        </button>
      </div>

      {FavoritesList.length > 0 ? (
        <ul className="favorites__list">
          {FavoritesList.map((movie) => {
            return (
              <div className="favorite__list_container" key={movie.id}>
                <li className="favorites__list__li">
                  <div className="favorite-poster-wrapper">
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={`${movie.poster_path}`}
                      />
                    ) : (
                      <div className="favorite-filler-poster"></div>
                    )}
                  </div>
                  {movie.title} {"  "}
                  <b>
                    <i>{movie.vote_average}</i>
                  </b>
                </li>
                <button
                  onClick={() => {
                    removeMovieFromFavoritesList(movie.id);
                  }}
                  className="favorites__list__button"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <h2 className="no-movies">Favori Film Yoxdur...</h2>
      )}
    </div>
  );
};

export default Favorites;
