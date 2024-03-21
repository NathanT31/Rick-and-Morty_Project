import LocationCard from "../components/LocationCard";

function Locations({ info, results, searchQuery }) {
  return (
    <div className="flex flex-col gap-10 my-10">
      <h1 className="text-3xl font-bold text-indigo-500 text-start animate__animated animate__zoomIn">
        {(searchQuery && searchQuery !== "" ? "Found: " : "All locations: ") +
          info.count}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-10 mx-auto content-center place-content-center justify-center">
        {results.map((location) => (
          <LocationCard location={location} key={"loc_" + location.id} />
        ))}
      </div>
    </div>
  );
}

export default Locations;
