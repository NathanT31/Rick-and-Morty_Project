function CardContent({ episodes, lastLocationName, lastLocationUrl }) {
  return (
    <main className="CHAR-CARD-CONTENT flex flex-col gap-2">
      <span className="text-lg">Espisodes: {episodes}</span>
      <div className="flex flex-col">
        <span className="text-zinc-500">Last known location:</span>
        <a
          href={lastLocationUrl}
          target="blank"
          className="text-lg hover:text-indigo-500"
        >
          {lastLocationName}
        </a>
      </div>
    </main>
  );
}

export default CardContent;
