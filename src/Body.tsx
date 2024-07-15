import React from 'react';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface BodyProps {
  movies: Movie[];
}

const Body: React.FC<BodyProps> = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
