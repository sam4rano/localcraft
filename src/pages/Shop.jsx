
import ArtandPainting from "../components/category/ArtandPainting";
import Glassblowing from "../components/category/GlassBlowing";
import MetalWork from "../components/category/MetalWork";
import Pottery from "../components/category/Pottery";
import WoodWork from "../components/category/WoodWork";


const Shop = () => {
  return (
    <div>
      <div className="hero-section bg-purple-600 text-white flex flex-col items-center justify-center p-10 overflow-hidden h-[300px] relative">
        <h2 className="text-4xl font-bold leading-tight opacity-0 animate-popUp">
          Mind Blowing Craft for a Mind Blowing Home Decoration
        </h2>
        <h5 className="text-xl font-medium mt-2 opacity-0 animate-slideUp">
          Give your apartment a facelift
        </h5>
      </div>

      <div className="flex flex-col align-middle">
        <ArtandPainting />
        <Glassblowing />
        <MetalWork />
        <Pottery />
        <WoodWork />
      </div>
    </div>
  );
};

export default Shop;
