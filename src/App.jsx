import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ItemLista from "./components/ItemLista";

function App() {
  const [albuns, setAlbums] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("albuns")) {
      setAlbums(JSON.parse(localStorage.getItem("albuns")));
    }
  }, []);

  const listaAlbuns = albuns.map((album) => (
    <ItemLista key={album.id} album={album} albuns={albuns} setAlbums={setAlbums} />
  ));

  return (
    <>
      <Header />
        <div>{listaAlbuns}</div>
    </>
  );
}

export default App;
