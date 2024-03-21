function CardContent({
  episodes,
  lastLocationName,
  onLocationClick = () => {},
}) {
  return (
    <main className="CHAR-CARD-CONTENT flex flex-col gap-2">
      <span className="text-lg">Espisodes: {episodes}</span>
      <div className="flex flex-col">
        <span className="text-zinc-500">Last known location:</span>
        <a
          onClick={onLocationClick}
          className="w-max text-lg hover:text-indigo-500 cursor-pointer"
        >
          {lastLocationName}
        </a>
      </div>
    </main>
  );
}

export default CardContent;
