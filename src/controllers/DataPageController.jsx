import { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../scripts/SearchContext";

import Characters from "../pages/Characters";

function DataPageController() {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [page, setPage] = useState(1);
  const [isSearchQueryChanged, setIsSearchQueryChanged] = useState(false);

  const navigate = useNavigate();

  const { searchQuery, typeQuery } = useContext(SearchContext);

  const reqAPI = useCallback(async (page, searchQuery) => {
    const apiRequest = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
    );

    console.log(apiRequest.status);
    const apiData = await apiRequest.json();

    setData(apiData.results);
    setInfo(apiData.info);
  }, []);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (isSearchQueryChanged) {
      setPage(1);
      setIsSearchQueryChanged(false);
    }

    reqAPI(page, searchQuery);

    if (searchQuery && searchQuery != "") {
      navigate(`/characters/?page=${page}&name=${searchQuery}`, {
        replace: true,
      });
    } else {
      navigate(`/characters/?page=${page}`, {
        replace: true,
      });
    }
  }, [reqAPI, page, navigate, searchQuery, isSearchQueryChanged]);

  useEffect(() => {
    setIsSearchQueryChanged(true);
  }, [searchQuery]);

  return (
    <div className="my-5">
      {!data ? null : (
        <Characters
          data={data}
          page={page}
          pages={info.pages}
          handleChangePage={handleChangePage}
        />
      )}
    </div>
  );
}

export default DataPageController;
