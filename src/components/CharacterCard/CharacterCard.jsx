import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";

function CharacterCard({ character }) {
  const { id, name, status, species, episode, image, location, url } =
    character;

  return (
    <div
      key={`char_${id}`}
      className="CHAR-CARD flex flex-col sm:flex-row sm:max-w-xl bg-white rounded-lg overflow-hidden capitalize animate__animated animate__fadeInRight transition hover:drop-shadow-lg"
    >
      <div className="CHAR-CARD-IMG w-full sm:w-2/5 max-h-72 sm:max-h-full">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="CHAR-CARD-MAIN flex flex-col w-full sm:w-3/5 p-4 font-medium gap-5 justify-between">
        <CardHeader name={name} url={url} status={status} species={species} />
        <CardContent
          episodes={episode.length}
          lastLocationName={location.name}
          lastLocationUrl={location.url}
        />
        <CardFooter characterUrl={url} />
      </div>
    </div>
  );
}

export default CharacterCard;
