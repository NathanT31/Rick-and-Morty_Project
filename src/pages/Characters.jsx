import CharacterCard from "../components/CharacterCard/CharacterCard";
import Navigation from "../components/Navigation";

function Characters({ data, page, pages, setPage, count, searchQuery }) {
  return (
    <div className="flex flex-col gap-10 my-10">
      <h1 className="text-3xl font-bold text-indigo-500 text-start animate__animated animate__zoomIn">
        {(searchQuery && searchQuery != "" ? "Found: " : "All characters: ") +
          count}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-5 gap-y-10 mx-auto content-center place-content-center justify-center">
        {data.map((character) => (
          <CharacterCard character={character} key={"char_" + character.id} />
        ))}
      </div>
      {pages > 1 ? (
        <Navigation
          page={page}
          pages={pages}
          setPage={setPage}
          searchQuery={searchQuery}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Characters;
