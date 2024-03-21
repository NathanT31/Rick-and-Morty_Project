function LocationCard({ location }) {
  const { id, name, type, dimension, residents } = location;
  return (
    <div
      key={`loc_${id}`}
      className="LOC-CARD max-w-md bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 hover:bg-opacity-50 rounded-lg overflow-hidden capitalize animate__animated animate__fadeInRight transition duration-500 hover:shadow-lg"
    >
      <div className="bg-indigo-600 text-white px-6 py-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{type}</p>
      </div>
      <div className="px-6 py-4 text-sm">
        <p className="">Dimension: {dimension}</p>
        <p className="">Residents: {residents.length}</p>
      </div>
    </div>
  );
}

export default LocationCard;
