import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBarButton({
  name = "name",
  parent = "parent",
  icon = "ban",
  checked = false,
}) {
  return (
    <div>
      <input
        type="radio"
        id={name}
        name={parent}
        value={name}
        className="hidden peer"
        required
      />
      <label
        htmlFor={name}
        title={`Search ${name}`}
        className="flex items-center justify-center w-10 h-full text-gray-500 bg-white cursor-pointer peer-checked:text-indigo-600 hover:text-indigo-500"
      >
        <FontAwesomeIcon icon={`fa-solid fa-${icon}`} size="xl" />
      </label>
    </div>
  );
}

const Searchbar = forwardRef(function Searchbar(
  { isSearchBarActive, handleInputChange },
  ref
) {
  return (
    <div className="relative px-5 flex mt-2">
      <form
        onSubmit={handleInputChange}
        className={`flex w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out ring-4 ${
          !isSearchBarActive ? "h-0 ring-transparent" : "h-10 ring-zinc-200"
        }`}
      >
        <input
          id="handleSearch"
          ref={ref}
          type="search"
          name="handleSearch"
          placeholder="Search"
          className={`w-full h-full px-4 bg-zinc-200 transition-all duration-500 ease-in-out focus:font-medium focus:bg-white outline-none`}
        ></input>
        <div className="flex items-center border-l-4 border-zinc-200">
          <SearchBarButton name="character" parent="searchBy" icon="person" />
          <SearchBarButton
            name="location"
            parent="searchBy"
            icon="location-dot"
          />
        </div>
      </form>
    </div>
  );
});

export default Searchbar;
