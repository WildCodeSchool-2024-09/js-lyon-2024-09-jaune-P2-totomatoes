import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import Pagination from "../components/Pagination";

import { useFavorite } from "../Contexts/FavoriteContext";

function Home() {
  const { favorites, setFavorites, shows } = useFavorite();

  const [pageActuelle, setPageActuelle] = useState(1);
  const showsParPage = 12;

  const indexDebut = (pageActuelle - 1) * showsParPage;
  const indexFin = indexDebut + showsParPage;

  const navigate = useNavigate();

  const cardClick = (id: number): void => {
    navigate(`/movie/${id}`);
  };

  const toggleLike = (id: number) => {
    if (favorites.includes(id) === true) {
      setFavorites(favorites.filter((AlreadyId) => AlreadyId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <>
      <section className="card">
        {shows.slice(indexDebut, indexFin).map((movie) => (
          <figure key={movie.id} className="item">
            <div className="centerImage">
              <img
                className="imagefilm"
                src={movie.image.original}
                alt={movie.name}
                onClick={() => cardClick(movie.id)}
                onKeyDown={() => cardClick(movie.id)}
              />
            </div>
            <section className="titleButton">
              <h2
                onClick={() => cardClick(movie.id)}
                onKeyDown={() => cardClick(movie.id)}
                className="titlefilm"
              >
                {movie.name}
              </h2>
              <button
                type="button"
                className="star"
                onClick={() => toggleLike(movie.id)}
              >
                {favorites.includes(movie.id) === true ? "⭐" : "☆"}
              </button>
            </section>
          </figure>
        ))}
      </section>
      <Pagination
        pageActuelle={pageActuelle}
        totalPages={Math.ceil(shows.length / showsParPage)}
        onPageChange={setPageActuelle}
      />
    </>
  );
}

export default Home;
