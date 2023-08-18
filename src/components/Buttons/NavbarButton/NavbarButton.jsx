import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./NavbarButton.module.css";

function NavbarButton({ page = "", icon = "", children }) {
  return (
    <NavLink
      to={`/${page}/`}
      className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
    >
      <div className="flex items-center gap-2 font-bold capitalize transition-color ease-in-out hover:text-indigo-600">
        {icon ? (
          <FontAwesomeIcon className="sm:hidden" icon={`fa-solid ${icon}`} />
        ) : (
          <></>
        )}
        <span
          className={icon ? `hidden sm:inline ${styles.navbarButton}` : null}
        >
          {children}
        </span>
      </div>
    </NavLink>
  );
}

export default NavbarButton;
