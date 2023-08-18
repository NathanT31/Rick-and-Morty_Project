import { useState } from "react";

const CharacterFetcherAPI = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(undefined);

  const fetchCharacterData = async (characterId = 1) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${
          characterId <= 826 ? characterId : 1
        }`
      );
      const data = await response.json();

      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      console.log("fetchCharacter");
    }
  };

  return {
    character: data || {},
    isLoading,
    error,
    fetchCharacterData,
  };
};

export default CharacterFetcherAPI;
