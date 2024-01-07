import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

export default function DetailPage() {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`/movie/${movieId}`);

      setMovies(request.data);
    }

    fetchData();
  }, [movieId]);
  
  if (!movies) return <div>...loading</div>;

  return (
    <section>
      <img
        className="modal__poster-img"
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="modal__poster-img"
      />
    </section>
  );
}
