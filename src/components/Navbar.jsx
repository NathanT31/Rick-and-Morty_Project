import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBarButton({ link = "", icon = "", text = "nav button" }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive ? "text-indigo-600" : "hover:text-indigo-500"
      }
    >
      <div className="flex items-center gap-2 font-bold capitalize">
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
  return (
    <header className="flex flex-col">
      <nav className="flex h-14 px-5 items-center justify-between text-lg border-b border-zinc-200 tracking-tight">
        <NavLink to="/" className="text-xl font-bold text-indigo-600">
          <span>R&M Project</span>
        </NavLink>

        <ul className="DESKTOP-MENU flex grow gap-2.5 justify-end items-center">
          <NavBarButton link={"/characters"} icon="fa-users" text="Chars" />
          {/* Posteriormente, implementar las ubicaciones */}
          <span>Locations</span>
          {/* Implementar la barra de busqueda */}
          <span>O_</span>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
