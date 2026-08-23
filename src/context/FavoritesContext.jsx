import { createContext, useMemo, useState } from "react";

export const FavoritesContext = createContext();

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const addFavorite = (favorite) => {
    setFavorites((prev) => {
      const exists = prev.some((movie) => movie.id === favorite.id);

      if (exists) {
        return prev.map((movie) =>
          movie.id === favorite.id ? favorite : movie
        );
      }

      return [...prev, favorite];
    });
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const value = useMemo(
    () => ({
      favorites,
      selectedMovie,
      setSelectedMovie,
      addFavorite,
      removeFavorite,
    }),
    [favorites, selectedMovie]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
