// Mock data for the products
const products = [
  {
    id: 2,
    image: "/src/assets/painting_one.png",
    title: "Black beauty painting",
    price: "$200",
  },
  {
    id: 1,
    image: "/src/assets/art_one.png",
    title: "Black beauty painting",
    price: "$200",
  },

  {
    id: 3,
    image: "/src/assets/painting_two.png",
    title: "Black beauty painting",
    price: "$200",
  },
];

const SubArtandPainting = () => {
  return (
    <div className="w-[100%] flex flex-row gap-[20px] mx-auto sm:flex-col sm:align-middle sm:justify-center h-screen">
      {products.map((product) => (
        <ul key={product.id} className="w-full gap-[10px] flex ">
          <div className="bg-primary rounded-[12px] shadow-md overflow-hidden p-[12px] ">
            <img src={product.image} alt={product.title} className="w-full" />
            <div className="p-[10px] flex w-full flex-col">
              <h3 className="text-lg font-semibold text-white">
                {product.title}
              </h3>
              <div className="flex flex-row justify-between align-middle items-center">
                <p className="text-white">{product.price}</p>
                <button className="p-[5px] text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default SubArtandPainting;
