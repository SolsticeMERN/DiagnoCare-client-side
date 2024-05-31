import Banner from "./Banner/Banner";
import FeatureTests from "./FeaturedTests/FeatureTests";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <div className="mb-16 my-20">
          <h2 className="text-5xl font-bold text-center">Featured Tests</h2>
        </div>
      </div>
      <FeatureTests />
    </div>
  );
};

export default Home;
