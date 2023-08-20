import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExpandButton({ onClick }) {
  return (
    <button
      role="button"
      onClick={onClick}
      className="EXPAND-BUTTON absolute flex items-end p-5 top-0 right-0 w-24 h-24 bg-indigo-700 rounded-full cursor-pointer text-zinc-100 text-xl transition delay-150 duration-500 -translate-y-[50%] translate-x-[50%] sm:-translate-y-[200%] sm:translate-x-[200%] group-hover:-translate-y-[50%] group-hover:translate-x-[50%]"
    >
      <FontAwesomeIcon icon="fa-solid fa-expand" />
    </button>
  );
}

export default ExpandButton;
