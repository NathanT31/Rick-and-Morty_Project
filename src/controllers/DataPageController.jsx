import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../scripts/SearchContext";

import Characters from "../pages/Characters";

async function reqAPI(page, searchQuery) {
  const apiRequest = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );

  console.log(apiRequest.status);
  const apiData = await apiRequest.json();

  return apiData;
  // setData(apiData.results);
  // setInfo(apiData.info);
}

function DataPageController() {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchQueryChanged, setIsSearchQueryChanged] = useState(false);
  const [isPageChanged, setIsPageChanged] = useState(false);

  const navigate = useNavigate();

  const { searchQuery, typeQuery } = useContext(SearchContext);

  const getData = async (pagina, searchQuery) => {
    setIsLoading(true);
    try {
      const apiData = await reqAPI(pagina, searchQuery);
      setData(apiData.results);
      setInfo(apiData.info);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
      setInfo(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
    setIsPageChanged(true);
  };

  useEffect(() => {
    setIsSearchQueryChanged(true);
  }, [searchQuery]);

  useEffect(() => {
    if (!isLoading) {
      if (isSearchQueryChanged) {
        setPage(1);
        setIsSearchQueryChanged(false);
        getData(1, searchQuery);
      } else if (isPageChanged && !isSearchQueryChanged) {
        getData(page, searchQuery);
      }
    }
  }, [page, searchQuery, isSearchQueryChanged, isPageChanged]);

  useEffect(() => {
    if (searchQuery && searchQuery != "") {
      navigate(`/characters/?page=${page}&name=${searchQuery}`, {
        replace: true,
      });
    } else {
      navigate(`/characters/?page=${page}`, {
        replace: true,
      });
    }
    setIsPageChanged(false);
  }, [navigate, page, searchQuery]);

  return (
    <div className="my-5">
      {!data ? null : (
        <Characters
          data={data}
          page={page}
          pages={info.pages}
          count={info.count}
          searchQuery={searchQuery}
          handleChangePage={handleChangePage}
        />
      )}
    </div>
  );
}

export default DataPageController;
