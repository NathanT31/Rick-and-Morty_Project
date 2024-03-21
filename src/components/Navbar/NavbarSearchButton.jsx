import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarSearchButton({ isSearchBarActive, handleClick }) {
  return (
    <div
      className={`SEARCH-BTN px-1.5 rounded-lg cursor-pointer transition-all ease-in-out outline outline-none border-transparent border hover:border-2 hover:border-indigo-500 hover:text-indigo-500 ${
        isSearchBarActive ? "text-indigo-600 border-indigo-600" : ""
      }`}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        size="sm"
        onClick={handleClick}
      />
    </div>
  );
}

export default NavbarSearchButton;
