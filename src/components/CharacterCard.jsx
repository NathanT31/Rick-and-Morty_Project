function CharacterStatus({ status }) {
  let statusClass = "w-2.5 h-2.5 rounded-full";

  if (status.toLowerCase() === "alive") statusClass += " bg-green-500";
  else if (status.toLowerCase() === "dead") statusClass += " bg-red-500";
  else statusClass += " bg-gray-500";

  return <span className={statusClass}></span>;
}

function CardHeader({ name, url, status, species }) {
  return (
    <header className="flex flex-col">
      <h1 className="text-2xl font-bold hover:text-indigo-600">
        <a href={url} target="blank">
          {name}
        </a>
      </h1>
      <div className="flex flex-row items-center gap-1.5">
        <CharacterStatus status={status} />
        <span>{status}</span>
        <span>-</span>
        <span>{species}</span>
      </div>
    </header>
  );
}

function CardContent({ episode, location }) {
  return (
    <main className="flex flex-col gap-2">
      <span className="text-lg">Espisodes: {episode.length}</span>
      <div className="flex flex-col">
        <span className="text-zinc-500">Last known location:</span>
        <a
          href={location.url}
          target="blank"
          className="text-lg hover:text-indigo-500"
        >
          {location.name}
        </a>
      </div>
    </main>
  );
}

function CardFooter({ url }) {
  return (
    <></>
    // <footer className="flex justify-end">
    //   <BtnPrimary content="See more >" size="xs" url={url} />
    // </footer>
  );
}

function CharacterCard({ character }) {
  const { id, name, status, species, episode, image, location, url } =
    character;

  return (
    <div
      key={id}
      className="CARD flex flex-col sm:flex-row sm:max-w-xl bg-white rounded-lg overflow-hidden capitalize animate__animated animate__fadeInRight transition hover:drop-shadow-lg"
    >
      <div className="CARD-IMG w-full sm:w-2/5 max-h-72 sm:max-h-full">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="CARD-MAIN flex flex-col w-full sm:w-3/5 p-4 font-medium gap-5 justify-between">
        <CardHeader name={name} url={url} status={status} species={species} />
        <CardContent episode={episode} location={location} />
        <CardFooter url={url} />
      </div>
    </div>
  );
}

export default CharacterCard;
