import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import ExpandButton from "./ExpandButton";

function CharacterCard({ character, enableExpandCard = false, onExpandClick }) {
  const { id, name, status, species, episode, image, location, url } =
    character;

  const handleExpandCard = () => {
    onExpandClick(id);
  };

  return (
    <div
      key={`char_${id}`}
      className="CHAR-CARD group flex flex-col sm:flex-row max-w-xl bg-white backdrop-filter backdrop-blur-xl bg-opacity-75 rounded-lg overflow-hidden capitalize animate__animated animate__fadeInRight transition duration-500 hover:shadow-lg"
    >
      <div className="CHAR-CARD-IMG relative w-full sm:mr-4 sm:w-2/5 max-h-72 sm:max-h-full">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="CHAR-CARD-MAIN flex flex-col w-full sm:w-3/5 py-4 px-4 sm:px-2 font-medium gap-5 justify-between">
        <CardHeader
          name={name}
          url={url}
          status={status}
          species={species}
          onClick={handleExpandCard}
        />
        <CardContent
          episodes={episode.length}
          lastLocationName={location.name}
        />
        <CardFooter characterUrl={url} />
        {enableExpandCard ? <ExpandButton onClick={handleExpandCard} /> : <></>}
      </div>
    </div>
  );
}

export default CharacterCard;
