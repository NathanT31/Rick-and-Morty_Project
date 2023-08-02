function LocationCard({ location }) {
  const { id, name, type, dimension, residents } = location;
  return (
    <div
      key={`loc_${id}`}
      className="LOC-CARD max-w-md bg-white rounded-lg overflow-hidden drop-shadow-md capitalize"
    >
      <div className="bg-indigo-600 text-white px-6 py-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-zinc-200">{type}</p>
      </div>
      <div className="px-6 py-4 text-sm">
        <p className="">Dimension: {dimension}</p>
        <p className="">Residents: {residents.length}</p>
      </div>
    </div>
  );
}

export default LocationCard;
