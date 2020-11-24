import React, { useEffect, useState } from 'react';
import MoviesList from './components/MoviesList/MoviesList';
import './App.css';

interface HeadersInterface {
  method: string,
  headers: Headers
}

function App(): JSX.Element {
  const [error, setError] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [items, setItems] = useState<any[]>([]);
  const [itemsCloned, setItemsClones] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchInputChanges = (event: any): void => {
    setSearchTerm(event.target.value);
    if (event.target.value === '') {
      setItems(itemsCloned);
    }
  }

  const handleChange = (): void => {
    const results = items.filter((i: any) => i.overview.toLowerCase().includes(searchTerm.toLowerCase()));
    setItems(results);
  };

  const headers: HeadersInterface = {
    method: 'get',
    headers: new Headers({
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ'", 
      'Content-Type': 'application/json;charset=utf-8'
    }), 
  };

  useEffect(() => {
    fetch("https://api.themoviedb.org/4/list/1?api_key=6126a32249050ab062971cd9bc3b6365", headers)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.results);
          setItemsClones(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  });

  if (error) {
    return <div>Error: { error }</div>;
  } else if (!isLoaded) {
    return <div className="dual-ring"></div>;
  } else {
    return (
      <div className="movies-app">
        <div className="movies-search">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchInputChanges}
          />
          <button onClick={handleChange}>Search</button>
        </div>
        <MoviesList list={items}/>
      </div>
    );
  }
}

export default App;
