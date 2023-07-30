{
  /* Falta agregar las flechas de direccion a los botones de navegacion entre paginas y tal vez hacer que cuando se esté en movil, el texto no apareza, solo las flechas */
}

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import CharacterCard from "../components/CharacterCard";
import Navigation from "../components/Navigation";

function RenderCards({ characters }) {
  if (!characters) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-auto content-center place-content-center justify-center">
      {characters.map((character) => (
        <CharacterCard character={character} key={"char_" + character.id} />
      ))}
    </div>
  );
}

function Characters() {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const reqAPI = useCallback(async (page) => {
    const api = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const characterAPI = await api.json();

    setCharacters(characterAPI.results);
    setInfo(characterAPI.info);
  }, []);

  useEffect(() => {
    reqAPI(page);
    navigate(`/characters/${page}`, { replace: true });
  }, [reqAPI, page, navigate]);

  return (
    <div className="flex flex-col gap-10 my-5">
      <h1 className="text-3xl font-bold text-indigo-400 text-start animate__animated animate__zoomIn">
        All characters
      </h1>
      {!characters ? null : (
        <>
          <RenderCards characters={characters} />
          <Navigation page={page} setPage={setPage} pages={info.pages} />
        </>
      )}
    </div>
  );
}

export default Characters;
