import { useState, useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";

import { SearchContext } from "../../scripts/SearchContext";
import NavbarRender from "./NavbarRender";

function NavBar() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const searchBarRef = useRef(null);

  const actualLocation = useLocation();

  const { searchQuery, setSearchQuery, setTypeQuery } =
    useContext(SearchContext);

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.handleSearch) {
      setSearchQuery(event.target.handleSearch.value);
    }

    if (event.target.searchBy) {
      setTypeQuery(event.target.searchBy.value);
    }
    // console.log(event.target.handleSearch.value);
    // console.log(event.target.searchBy.value);
  };

  const handleToggleSearchbar = () => {
    setIsSearchBarActive((prev) => !prev);
  };

  useEffect(() => {
    if (isSearchBarActive && actualLocation.pathname != "/") {
      searchBarRef.current.focus();
      searchBarRef.current.value = searchQuery;
    }
  }, [isSearchBarActive, actualLocation, searchQuery]);

  return (
    <NavbarRender
      isSearchBarActive={isSearchBarActive}
      handleInputChange={handleInputChange}
      handleToggleSearchbar={handleToggleSearchbar}
      searchBarRef={searchBarRef}
      actualLocation={actualLocation}
    />
  );
}

export default NavBar;
