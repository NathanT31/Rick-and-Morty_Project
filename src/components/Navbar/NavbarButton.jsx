import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export default NavbarButton;
