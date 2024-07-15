import React, { useState, useEffect } from 'react';
import Header from './Header';
import Body from './Body';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const API_KEY = '2c5e3bd9273a541fc6dabe03adb7a470';
const BASE_ADDRESS = 'https://api.themoviedb.org/3/';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearch = async (query: string) => {
    const response = await fetch(
      `${BASE_ADDRESS}search/movie?api_key=${API_KEY}&query=${query}`,
    );
    const data = await response.json();
    setSearchResults(data.results);
  };

  const fetchInitialMovies = async () => {
    const response = await fetch(
      `${BASE_ADDRESS}trending/movie/day?api_key=${API_KEY}`,
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  return (
    <div>
      <Header onSearch={handleSearch} />
      <Body movies={searchResults.length > 0 ? searchResults : movies} />
    </div>
  );
};

export default App;
