const characterStatusColor = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  Unknown: "bg-gray-500",
};

function CardHeader({ name, url, status, species }) {
  return (
    <header className="CHAR-CARD-HEADER flex flex-col">
      <h1 className="text-2xl font-bold hover:text-indigo-600">
        <a href={url} target="blank">
          {name}
        </a>
      </h1>
      <p className="flex flex-row items-center gap-1.5">
        <span
          className={`w-2.5 h-2.5 rounded-full ${characterStatusColor[status]}`}
        ></span>
        <span>{status}</span>
        <span>-</span>
        <span>{species}</span>
      </p>
    </header>
  );
}

export default CardHeader;
