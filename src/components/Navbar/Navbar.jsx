import { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SearchContext } from "../../scripts/SearchContext";
import NavbarRender from "./NavbarRender";

function NavBar() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const searchBarRef = useRef(null);

  const actualLocation = useLocation();
  const navigate = useNavigate();

  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.handleSearch) {
      setSearchQuery(event.target.handleSearch.value);
    }

    if (event.target.searchBy) {
      event.target.searchBy.value === "character"
        ? navigate("/characters/")
        : event.target.searchBy.value === "location"
        ? navigate("/locations/")
        : null;
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
