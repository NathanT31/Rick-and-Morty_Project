import { useState, useEffect, useContext } from "react";

import ApiDataFetcher from "../scripts/ApiDataFetcher";
import { SearchContext } from "../scripts/SearchContext";

import Characters from "../pages/Characters";

function CharactersController() {
  const [page, setPage] = useState(1);
  const [isSearchQueryChanged, setIsSearchQueryChanged] = useState(false);
  const [isPageChanged, setIsPageChanged] = useState(false);

  const { data, info, busy, fetchData } = ApiDataFetcher();
  const { searchQuery } = useContext(SearchContext);

  useEffect(() => {
    setIsSearchQueryChanged(true);
  }, [searchQuery]);

  useEffect(() => {
    setIsPageChanged(true);
  }, [page]);

  useEffect(() => {
    if (!busy) {
      if (isSearchQueryChanged) {
        setPage(1);
        setIsSearchQueryChanged(false);
        fetchData(1, "character", searchQuery);
      } else if (isPageChanged) {
        setIsPageChanged(false);
        fetchData(page, "character", searchQuery);
      }
    }
  }, [page, searchQuery, isSearchQueryChanged, isPageChanged]);

  return (
    <>
      {data && info ? (
        <Characters
          data={data}
          page={page}
          pages={info.pages}
          setPage={setPage}
          count={info.count}
          searchQuery={searchQuery}
        />
      ) : (
        <h1>Not found</h1>
      )}
    </>
  );
}

export default CharactersController;
