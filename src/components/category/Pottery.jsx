// Mock data for the products
import paint_one from "../../assets/painting_one.png";
import paint_two from "../../assets/painting_two.png";
import art_one from "../../assets/art_one.png";

const products = [
  {
    id: 1,
    image: paint_one,
    title: "Black painting",
    price: "$200",
  },
  {
    id: 2,
    image: paint_two,
    title: "Beauty painting",
    price: "$200",
  },

  {
    id: 3,
    image: art_one,
    title: "Dior painting",
    price: "$200",
  },
  {
    id: 4,
    image: paint_one,
    title: "EastSide painting",
    price: "$200",
  },
  {
    id: 5,
    image: art_one,
    title: "Clotha painting",
    price: "$200",
  },

  {
    id: 6,
    image: paint_two,
    title: "Black beauty painting",
    price: "$200",
  },
];

const Pottery = () => {
  return (
    <div className="flex align-middle flex-col py-[20px] my-[20px] px-[10px] gap-[20px]">
      <h2 className="text-[40px] leading-[50px] font-medium text-center">Pottery</h2>

      <div className="w-[100%] flex flex-row gap-[20px]">
        {products.map((product) => (
          <ul key={product.id} className="w-full gap-[10px] flex">
            <div className="bg-primary rounded-lg shadow-md overflow-hidden p-[12px] ">
              <img src={product.image} alt={product.title} className="w-full" />
              <div className="p-[10px] flex w-full flex-col">
                <h3 className="text-lg font-semibold text-black">
                  {product.title}
                </h3>
                <div className="flex flex-row justify-between align-middle items-center">
                  <p className="text-gray-500">{product.price}</p>
                  <button className="p-[5px] text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:bg-gray-800">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Pottery;
