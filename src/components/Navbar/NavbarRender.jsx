import { NavLink } from "react-router-dom";

import NavbarButton from "../Buttons/NavbarButton/NavbarButton";
import NavbarSearchButton from "./NavbarSearchButton";
import Searchbar from "../Searchbar";

function NavbarRender({
  isSearchBarActive,
  handleInputChange,
  handleToggleSearchbar,
  searchBarRef,
  actualLocation,
  handleChangePage,
}) {
  return (
    <header className="flex flex-col container mx-auto">
      <nav className="flex h-14 px-5 gap-6 items-center justify-between text-lg border-b border-zinc-200 tracking-tight">
        <NavLink to="/" className="LOGO text-xl font-bold text-indigo-600">
          <span>R&M Project</span>
        </NavLink>

        <ul className="DESKTOP-MENU flex grow gap-3 justify-end items-center">
          <NavbarButton page={"characters"} icon="fa-users">
            Characters
          </NavbarButton>
          <NavbarButton page={"locations"} icon="fa-location-dot">
            Locations
          </NavbarButton>
        </ul>
        {actualLocation.pathname !== "/" && (
          <NavbarSearchButton
            isSearchBarActive={isSearchBarActive}
            handleClick={handleToggleSearchbar}
          />
        )}
      </nav>
      {actualLocation.pathname !== "/" && (
        <Searchbar
          ref={searchBarRef}
          isSearchBarActive={isSearchBarActive}
          handleInputChange={handleInputChange}
        />
      )}
    </header>
  );
}

export default NavbarRender;
