import { createContext, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeQuery, setTypeQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, typeQuery, setTypeQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchContextProvider };
