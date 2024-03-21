const characterStatusColor = {
  alive: "bg-green-500",
  dead: "bg-red-500",
  unknown: "bg-gray-500",
};

function CardHeader({ name, url, status, species, onClick }) {
  return (
    <header className="CHAR-CARD-HEADER flex flex-col">
      <a
        onClick={onClick}
        className="w-max text-2xl font-bold hover:text-indigo-600 cursor-pointer"
      >
        <h1>{name}</h1>
      </a>
      <p className="flex flex-row items-center gap-1.5">
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            characterStatusColor[status.toLowerCase()]
          }`}
        ></span>
        <span>{status}</span>
        <span>-</span>
        <span>{species}</span>
      </p>
    </header>
  );
}

export default CardHeader;
