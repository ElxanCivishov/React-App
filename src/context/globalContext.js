import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

const initialState = {
  FavoritesList: localStorage.getItem("FavoritesList")
    ? JSON.parse(localStorage.getItem("FavoritesList"))
    : [],
  FavoritesListFolders: localStorage.getItem("FavoritesFolders")
    ? JSON.parse(localStorage.getItem("FavoritesFolders"))
    : [],
};

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addMovieToFavoritesList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITESLIST", payload: movie });
  };

  const removeMovieFromFavoritesList = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITESLIST", payload: id });
  };

  const addMoviesToFavoritesListFolders = (folderName, movies) => {
    const FavoritesFolders = {
      id: "999" + movies[0].id,
      folderName: folderName,
      movies: movies,
    };
    dispatch({
      type: "ADD_MOVIES_TO_FAVORITESLISTFOLDERS",
      payload: FavoritesFolders,
    });
  };

  useEffect(() => {
    localStorage.setItem("FavoritesList", JSON.stringify(state.FavoritesList));
    localStorage.setItem(
      "FavoritesListFolders",
      JSON.stringify(state.FavoritesListFolders)
    );
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        FavoritesList: state.FavoritesList,
        FavoritesListFolders: state.FavoritesFolders,
        addMovieToFavoritesList,
        removeMovieFromFavoritesList,
        addMoviesToFavoritesListFolders,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
