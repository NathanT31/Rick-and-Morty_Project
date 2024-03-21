import { useState, useEffect, useContext, useRef, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";

import DataFetcherAPI from "../../scripts/DataFetcherAPI";
import { SearchContext } from "../../scripts/SearchContext";

import Characters from "./Characters";
import CharacterDetail from "./CharacterDetail";

function CharactersController() {
  const { info, results, isLoading, error, fetchData } = DataFetcherAPI();

  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { characterId } = useParams();

  const { searchQuery } = useContext(SearchContext);
  const fetchDataRef = useRef();
  fetchDataRef.current = fetchData;

  useEffect(() => {
    setCurrentPage(1);
    fetchDataRef.current({ type: "character", params: `name=${searchQuery}` });
  }, [searchQuery]);

  const handlePageClick = useCallback(
    ({ selected }) => {
      setCurrentPage(selected + 1);
      fetchDataRef.current({
        type: "character",
        params: `name=${searchQuery}&page=${selected + 1}`,
      });
    },
    [searchQuery]
  );

  const handleExpandCharacterCard = (characterId) => {
    navigate(`/characters/${characterId}`, { replace: true });
  };

  const handleCloseCharacterCard = () => {
    navigate(`/characters/`, { replace: true });
  };

  const renderCharacterDetail = () => {
    const character =
      results.filter((character) => character.id === Number(characterId)) || {};

    if (Object.keys(character).length > 0) {
      return (
        <CharacterDetail
          onCloseClick={handleCloseCharacterCard}
          character={character}
        />
      );
    } else {
      return <></>;
    }
  };

  const renderCharacters = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return (
      <Characters
        info={info}
        results={results}
        searchQuery={searchQuery}
        handleExpandCharacterCard={handleExpandCharacterCard}
      />
    );
  };

  return (
    <div className="flex flex-col">
      {renderCharacters()}
      {renderCharacterDetail()}
      <Pagination
        pageCount={info.pages}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CharactersController;
