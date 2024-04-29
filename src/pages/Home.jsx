import ArtisanList from "../components/ArtisanList";
import Category from "../components/Category";
import HeroSection from "../components/Herosection";
import Info from "../components/Info";
import Newsletter from "../components/NewsLetter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Category />
      <Info />
      <ArtisanList />
      <Newsletter />
    </div>
  );
};

export default Home;
