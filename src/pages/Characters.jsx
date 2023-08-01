import CharacterCard from "../components/CharacterCard/CharacterCard";
import Navigation from "../components/Navigation";

function Characters({ data, page, pages, handleChangePage }) {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-indigo-500 text-start animate__animated animate__zoomIn">
        All characters
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mx-auto content-center place-content-center justify-center">
        {data.map((character) => (
          <CharacterCard character={character} key={"char_" + character.id} />
        ))}
      </div>
      <Navigation page={page} pages={pages} changePage={handleChangePage} />
    </div>
  );
}

export default Characters;
