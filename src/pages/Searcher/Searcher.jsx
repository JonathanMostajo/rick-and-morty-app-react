import React, { useState } from "react";
import Axios from "axios";
import "./Searcher.scss";

const Searcher = () => {
  const [characterName, setCharacterName] = useState("");
  const [character, setCharacter] = useState([]);

  const searchCharacter = () => {
    Axios.get(
      `https://rickandmortyapi.com/api/character/?name=${characterName}`
    ).then((res) => {
      console.log(res.data.results);
      setCharacter(res.data.results);
    });
  };

  return (
    <div className="div-searcher">
      <h1>Search your character</h1>

      <input
        className="input-search"
        type="text"
        onChange={(event) => {
          setCharacterName(event.target.value);
        }}
      />
      <button className="btn-search" onClick={searchCharacter}>
        Search Character
      </button>
      <div className="character-card">
        {character.map((item) => (
          <figure className="character-card__item" key={item.id}>
            <h2 className="character-card__item--name">{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p className="character-card__item--gender">{item.gender}</p>
            <p className="character-card__item--species">{item.species}</p>
            <p className="character-card__item--status">{item.status}</p>
          </figure>
        ))}
      </div>
      <div className="characterCard"></div>
    </div>
  );
};

export default Searcher;
