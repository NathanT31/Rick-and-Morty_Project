import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Searchbar from "./Searchbar";

function NavbarSearchButton({ isSearchBarActive, setIsSearchBarActive }) {
  return (
    <div
      className={`SEARCH-BTN px-1.5 rounded-lg cursor-pointer transition-all ease-in-out outline ${
        isSearchBarActive
          ? "text-indigo-600 outline-4 outline-indigo-600"
          : "outline-transparent hover:outline-2 hover:outline-indigo-500 hover:text-indigo-500"
      }`}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        size="sm"
        onClick={() => setIsSearchBarActive((prev) => !prev)}
      />
    </div>
  );
}

function NavbarButton({ link = "", icon = "", text = "nav button" }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "text-indigo-600" : "hover:text-indigo-500"
      }
    >
      <div className="flex items-center gap-2 font-bold capitalize transition-color ease-in-out">
        {icon ? (
          <FontAwesomeIcon className="sm:hidden" icon={`fa-solid ${icon}`} />
        ) : (
          <></>
        )}
        <span className={icon ? "hidden sm:inline" : null}>{text}</span>
      </div>
    </NavLink>
  );
}

function NavBar() {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const searchBarRef = useRef(null);

  const actualLocation = useLocation();

  useEffect(() => {
    if (isSearchBarActive) searchBarRef.current.focus();
  }, [isSearchBarActive]);

  return (
    <header className="flex flex-col">
      <nav className="flex h-14 px-5 gap-6 items-center justify-between text-lg border-b border-zinc-200 tracking-tight">
        <NavLink to="/" className="LOGO text-xl font-bold text-indigo-600">
          <span>R&M Project</span>
        </NavLink>

        <ul className="DESKTOP-MENU flex grow gap-3 justify-end items-center">
          <NavbarButton link={"/characters"} icon="fa-users" text="Chars" />

          {/* Posteriormente, implementar las ubicaciones */}
          <NavbarButton icon="fa-location-dot" text="Locations" />
          {/* Posteriormente, implementar las ubicaciones */}
        </ul>
        {actualLocation.pathname !== "/" && (
          <NavbarSearchButton
            isSearchBarActive={isSearchBarActive}
            setIsSearchBarActive={setIsSearchBarActive}
          />
        )}
      </nav>
      {actualLocation.pathname !== "/" && (
        <Searchbar ref={searchBarRef} isSearchBarActive={isSearchBarActive} />
      )}
    </header>
  );
}

export default NavBar;
