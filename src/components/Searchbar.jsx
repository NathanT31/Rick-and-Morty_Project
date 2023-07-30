{
  /* 
    Queda pendiente hacer la funcionalidad de la barra de tareas (que busque ps) y agregar 2 dots para escoger entre buscar personaje o ubicacion
 */
}

import { forwardRef } from "react";

function Searchbar({ isSearchBarActive }, ref) {
  return (
    <div className="relative mx-5">
      <input
        ref={ref}
        type="search"
        id="default-search"
        className={`block w-full ml-auto px-4 rounded-lg bg-zinc-200 transition-all duration-500 ease-in-out focus:font-medium outline-transparent focus:outline-indigo-500 ${
          !isSearchBarActive ? "h-0" : "mt-2 h-10 focused"
        }`}
        placeholder="Search"
      ></input>
    </div>
  );
}

export default forwardRef(Searchbar);
