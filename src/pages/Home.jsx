import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import CharacterFetcherAPI from "../scripts/CharacterFetcherAPI";

import imageRickMorty from "../assets/img/rick-morty.png";
import HomeButton from "../components/Buttons/HomeButton/HomeButton";
import CharacterCard from "../components/CharacterCard/CharacterCard";

function Home() {
  const { character, isLoading, error, fetchCharacterData } =
    CharacterFetcherAPI();

  const fetchCharacterRef = useRef();
  fetchCharacterRef.current = fetchCharacterData;

  const generateRandomId = () => {
    const min = 1;
    const max = 900;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
  };

  useEffect(() => {
    const characterId = generateRandomId();
    fetchCharacterRef.current(characterId);
  }, []);

  const renderCharacter = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return <CharacterCard character={character} key={"char_" + character.id} />;
  };

  return (
    <div className="relative">
      <div className="flex flex-col container place-content-center justify-center items-center gap-20 mx-auto min-h-screen py-16 md:py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-center mb-5">
            Rick and Morty Project
          </h1>
          <p className="text-zinc-500 px-2">
            Information about the characters and worlds of the{" "}
            <span className="font-bold">HBO</span> animated series.
          </p>
        </div>
        <div className="flex">
          <img
            src={imageRickMorty}
            alt="Rick & Morty"
            className="max-h-[420px] w-2/10 -translate-x-20 hidden lg:inline-block border-b border-zinc-300"
          />
          <div className="relative h-min flex flex-col gap-12 justify-center items-center z-10 bg-white p-10 rounded-xl shadow-2xl backdrop-filter backdrop-blur-xl bg-opacity-70">
            {renderCharacter()}
            <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
              <Link to="/characters/">
                <HomeButton>Find characters</HomeButton>
              </Link>
              <Link to="/locations/">
                <HomeButton>Find locations</HomeButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full left-0 top-0"></div>
    </div>
  );
}

export default Home;
