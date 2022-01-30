import axios from "axios";
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination/Pagination";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(0)

  const getCharacters = async (newPage = 1) => {
    const res = await axios("https://rickandmortyapi.com/api/character?page=" + newPage);
    setCharacters(res.data.results);
    setTotalPages(res.data.info)

  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <Pagination getCharacters={getCharacters} totalPages={totalPages}/>
      <Gallery list={characters} />
    </div>
  );
}

//axios("https://rickandmortyapi.com/api/character").then(res => console.log(res))
