import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "My store",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeaturedProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
