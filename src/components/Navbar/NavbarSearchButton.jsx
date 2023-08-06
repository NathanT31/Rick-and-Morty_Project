import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavbarSearchButton({ isSearchBarActive, handleClick }) {
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
        onClick={handleClick}
      />
    </div>
  );
}

export default NavbarSearchButton;
