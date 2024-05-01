
const data = [
  { id: 1, name: "Bob James", category: "Art and Painting", volume: "23000" },
  { id: 2, name: "David Lookman", category: "Pottery", volume: "23000" },
  { id: 3, name: "John Doe", category: "Glassblowing", volume: "23000" },
  { id: 4, name: "Jamie Jackson", category: "Metal work", volume: "23000" },
  { id: 5, name: "Julius Hungman", category: "wood work", volume: "23000" },
];

const ArtisanList = () => {
  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-400 p-[10px]">
        <thead className="text-xs uppercase bg-white text-gray-800">
          <tr>
            <th scope="col" className="py-3 px-6">
              Artisan
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Volume
            </th>
          </tr>
        </thead>
        <tbody className=" ">
          {data.map((row) => (
            <tr
              key={row.id}
              className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600"
            >
              <td
                scope="row"
                className="py-4 px-6 font-medium text-white whitespace-nowrap flex items-center"
              >
                <div className="w-3 h-3 bg-gray-400 rounded-full mr-3" />
                {row.name}
              </td>
              <td className="py-4 px-6">{row.category}</td>
              <td className="py-4 px-6">{row.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtisanList;
