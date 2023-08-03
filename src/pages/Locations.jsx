import Navigation from "../components/Navigation";
import LocationCard from "../components/LocationCard";

function Locations({ data, page, pages, setPage, count, searchQuery }) {
  return (
    <div className="flex flex-col gap-10 my-10">
      <h1 className="text-3xl font-bold text-indigo-500 text-start animate__animated animate__zoomIn">
        {(searchQuery && searchQuery != "" ? "Found: " : "All locations: ") +
          count}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mx-auto content-center place-content-center justify-center">
        {data.map((location) => (
          <LocationCard location={location} key={"loc_" + location.id} />
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

export default Locations;
