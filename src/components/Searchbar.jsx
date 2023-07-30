{
  /* 
    Queda pendiente hacer la funcionalidad de la barra de tareas (que busque ps) y agregar 2 dots para escoger entre buscar personaje o ubicacion
 */
}

import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchBarButton({
  name = "name",
  parent = "parent",
  icon = "ban",
  defaultChecked = false,
}) {
  return (
    <div>
      <input
        type="radio"
        id={name}
        name={parent}
        value={name}
        className="hidden peer"
        defaultChecked={defaultChecked}
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

function Searchbar({ isSearchBarActive }, ref) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Realizar aquí cualquier acción que desees en lugar de enviar una petición HTTP.
    // Por ejemplo, puedes realizar validaciones o modificar el estado de la aplicación.
    console.log(
      "Formulario enviado, pero no se realizará ninguna petición HTTP."
    );
  };

  return (
    <div className="relative px-5 flex mt-2">
      <form
        onSubmit={handleSubmit}
        className={`flex w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out ring-4 ${
          !isSearchBarActive ? "h-0 ring-transparent" : "h-10 ring-zinc-200"
        }`}
      >
        <input
          ref={ref}
          type="search"
          id="default-search"
          className={`w-full h-full px-4 bg-zinc-200 transition-all duration-500 ease-in-out focus:font-medium focus:bg-white outline-none`}
          placeholder="Search"
        ></input>
        <div className="flex items-center border-l-4 border-zinc-200">
          <SearchBarButton
            name="character"
            parent="search-by"
            icon="person"
            defaultChecked
          />
          <SearchBarButton
            name="location"
            parent="search-by"
            icon="location-dot"
          />
        </div>
      </form>
    </div>
  );
}

export default forwardRef(Searchbar);
