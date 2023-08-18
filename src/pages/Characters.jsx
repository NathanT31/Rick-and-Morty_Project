import CharacterCard from "../components/CharacterCard/CharacterCard";

function Characters({ info, results, searchQuery }) {
  return (
    <div className="flex flex-col gap-10 my-10">
      <h1 className="text-3xl font-bold text-indigo-500 text-start animate__animated animate__zoomIn">
        {(searchQuery && searchQuery !== "" ? "Found: " : "All characters: ") +
          info.count}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-10 mx-auto content-center place-content-center justify-center">
        {results.map((character) => (
          <CharacterCard character={character} key={"char_" + character.id} />
        ))}
      </div>
    </div>
  );
}

export default Characters;
