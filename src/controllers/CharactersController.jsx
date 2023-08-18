import { useState, useEffect, useContext, useRef, useCallback } from "react";
import Pagination from "../components/Pagination/Pagination";

import DataFetcherAPI from "../scripts/DataFetcherAPI";
import { SearchContext } from "../scripts/SearchContext";

import Characters from "../pages/Characters";

function CharactersController() {
  const { info, results, isLoading, error, fetchData } = DataFetcherAPI();

  const { searchQuery } = useContext(SearchContext);

  const [currentPage, setCurrentPage] = useState(1);

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

  const renderCharacters = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Ha ocurrido un error</div>;
    }

    return (
      <Characters info={info} results={results} searchQuery={searchQuery} />
    );
  };

  return (
    <div className="flex flex-col">
      {renderCharacters()}
      <Pagination
        pageCount={info.pages}
        handlePageClick={handlePageClick}
        currentPage={currentPage}
      />
    </div>
  );
}

export default CharactersController;
