import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const characterStatusColor = {
  alive: "bg-green-500",
  dead: "bg-red-500",
  unknown: "bg-gray-500",
};

function CharacterDetail({ character, onCloseClick }) {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
  } = character[0];

  const handleCloseClick = () => {
    onCloseClick();
  };

  return character ? (
    <div
      onClick={handleCloseClick}
      className="DETAIL-BACKGROUND fixed flex mx-auto place-content-center items-center justify-center top-0 left-0 w-full h-screen bg-zinc-700 bg-opacity-25 backdrop-filter backdrop-blur-sm"
    >
      <div className="flex container mx-auto place-content-center items-center justify-center">
        <div
          onClick={(event) => event.stopPropagation()}
          className="DETAIL-CARD bg-white rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-90 shadow-lg sm:w-full max-w-3xl max-h-screen overflow-y-auto"
        >
          <div className="DETAIL-CARD-HEADER flex justify-between items-center border-b-2 border-zinc-400 px-6 py-3 align-middle text-zinc-500 font-bold sticky top-0 bg-white">
            <span>ID: {id}</span>
            <button
              className="CLOSE-BUTTON text-2xl"
              onClick={handleCloseClick}
              role="button"
            >
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="DETAIL-CARD-CONTENT flex flex-col sm:flex-row p-6 text-xl">
            <img
              className="object-cover w-full sm:w-2/5 mr-5"
              src={image}
              alt={name}
            />
            <div className="flex flex-col w-full sm:w-3/5 gap-5 mt-5 sm:m-0 font-semibold capitalize">
              <h1 className="font-bold text-3xl">{name}</h1>
              <ul className="flex flex-col w-max gap-1">
                <li className="flex gap-5">
                  <span className="text-zinc-500">Status:</span>
                  <span>
                    {status}{" "}
                    <span
                      className={`mx-1 inline-block w-2.5 h-2.5 rounded-full ${
                        characterStatusColor[status.toLowerCase()]
                      }`}
                    />
                  </span>
                </li>
                <li className="flex gap-5">
                  <span className="text-zinc-500">Species:</span>
                  <span>{species}</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-zinc-500">Type:</span>
                  <span>{type}</span>
                </li>
                <li className="flex gap-5">
                  <span className="text-zinc-500">Gender:</span>
                  <span>{gender}</span>
                </li>
              </ul>
              <div className="flex flex-col">
                <span className="text-zinc-500">Origin:</span>
                <span className="hover:text-indigo-500 cursor-pointer">
                  {origin.name}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-zinc-500">Last known location:</span>
                <span className="hover:text-indigo-500 cursor-pointer">
                  {location.name}
                </span>
              </div>
            </div>
          </div>
          <div className="DETAIL-CARD-FOOTER flex items-center gap-3 border-t-2 border-zinc-400 px-6 py-3 font-bold overflow-x-auto">
            <h3 className="text-zinc-500">Episodes:</h3>
            <div className="flex gap-2 text-sm">
              {episode.map((episode, index) => (
                <span
                  className="py-1 px-2 rounded-md bg-indigo-600 text-white"
                  key={`ep-${index}`}
                >
                  {episode.match(/\/(\d+)$/)[1]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default CharacterDetail;
