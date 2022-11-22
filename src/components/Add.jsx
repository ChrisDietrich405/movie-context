import React, { useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=d25ba54d313689818a7a1fb2f7030935&query=${e.target.value}`
      );
      if (!response.errors) {
        setResults(response.data.results);
      } else {
        setResults([]);
      }
    };
    fetchMovie();
  };
  return (
    <div>
      <input type="text" value={query} onChange={onChange} />
      {results.length > 0 ? (
        <>
          {results.map((movie) => {
            return <ResultCard movie={movie} />;
          })}
        </>
      ) : ("No Movies Foundk")}
    </div>
  );
};

export default Add;
