import React, { useState } from 'react'
import Header from './Header';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const searchAlbum = () => {
    
    const searchText = document.querySelector(".header__search__input").value;
    const albuns = JSON.parse(localStorage.getItem("albuns")) || [];
    const searchResult = albuns.filter((album) =>
      album.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
      album.artista.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(searchResult);
    return searchResult;
  }

  return (
    <div>
      {/* Não há nada a ser renderizado aqui */}
    </div>
  )
}

export default Search