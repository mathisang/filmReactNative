import React, {useEffect, useState} from 'react';
import ListResults from './src/components/ListResults';
import Search from "./src/components/Search";
import {getMoviesFromApiAsync} from './src/services/network'
import data from './src/helpers/filmDatas';
import {ActivityIndicator} from "react-native";

export default function App() {
  const [searchText, setSearchText] = useState("texte");
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsloading] = useState(false);



  const getSearchedMovies = (searchedText) => {
    const newMovies = data.filter(movie => movie.title.toLowerCase().includes(searchedText.toLowerCase()));
    setMovies(newMovies);
  }

  const fetchMovies = () => {
    setIsloading(true);
    getMoviesFromApiAsync(searchText, currentPage).then(moviesJson => {
      console.log(moviesJson);
      setMovies(moviesJson.results)
      /*setTotalPages(moviesJson.total_pages)*/
      setIsloading(false);
    })
  }

  useEffect(()=>{
    fetchMovies();
  }, [])

  console.log(movies);
  return (
    <>
      <Search onSearch={(searchedText) => getSearchedMovies(searchedText)} />
      {isLoading && <ActivityIndicator/>}
      <ListResults isLoading={isLoading} movies={movies} searchedText={searchText}/>
    </>
  );
}