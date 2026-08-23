import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="page">
      <section className="page-title">
        <p className="eyebrow">Kişisel Liste</p>
        <h1>Favori Filmler</h1>
      </section>

      {favorites.length === 0 ? (
        <div className="message-box">
          <h2>Henüz favori film eklenmedi.</h2>
          <p>Ana sayfadan bir film seçerek favori listeni oluşturabilirsin.</p>
        </div>
      ) : (
        <section className="favorites-grid">
          {favorites.map((movie) => (
            <article className="favorite-card" key={movie.id}>
              <img src={movie.originalData.posterURL} alt={movie.customName} />

              <div>
                <h2>{movie.customName}</h2>
                <p className="muted">
                  Orijinal film: {movie.originalData.title}
                </p>
                <p className="muted">
                  {movie.originalData.year || "Yıl bilgisi yok"} · IMDb{" "}
                  {movie.originalData.imdbRating || "puan yok"}
                </p>
                <p>{movie.customDescription}</p>
                <p className="added-date">
                  Eklenme tarihi: {new Date(movie.addedAt).toLocaleString("tr-TR")}
                </p>
                <button type="button" onClick={() => removeFavorite(movie.id)}>
                  Favorilerden Sil
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
