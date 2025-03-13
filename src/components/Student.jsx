export function Student({ name, id, department }) {
  return (
    <>
      <div className="p-3 flex flex-col border border-gray-300 hover:shadow-md transition-shadow rounded-md">
        <div className="text-lg font-bold text-black p-2">{name}</div>
        <div className="p-2">{id.toUpperCase()}</div>
        <div className="p-2">{department}</div>
      </div>
    </>
  );
}
