const sizes = {
  base: "px-3 md:px-5 py-2 md:py-2.5 text-xs md:text-base font-medium",
  xl: "px-5 md:px-6 py-2.5 md:py-3.5 text-base font-bold",
};

function BtnPrimary({ content, url, onClick, disabled, size = "base" }) {
  return (
    <button
      onClick={onClick}
      href={url}
      disabled={disabled}
      className={`${sizes[size]} text-center text-white rounded-xl bg-indigo-600 transition ease-in-out hover:bg-indigo-700 active:scale-95 disabled:bg-indigo-400 disabled:cursor-not-allowed`}
    >
      {content}
    </button>
  );
}

export default BtnPrimary;
