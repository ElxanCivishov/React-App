export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_FAVORITESLIST":
      return {
        ...state,
        FavoritesList: [...state.FavoritesList, action.payload],
      };

    case "REMOVE_MOVIE_FROM_FAVORITESLIST":
      return {
        ...state,
        FavoritesList: [
          ...state.FavoritesList.filter((movie) => movie.id !== action.payload),
        ],
      };

    case "ADD_MOVIES_TO_FAVORITESLISTFOLDERS":
      return {
        ...state,
        FavoritesListFolders: [...state.FavoritesListFolders, action.payload],
        FavoritesList: [],
      };

    default:
      return state;
  }
};
