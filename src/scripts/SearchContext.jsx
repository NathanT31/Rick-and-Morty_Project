import { createContext, useState } from "react";

const SearchContext = createContext();

function SearchContextProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchContextProvider };
