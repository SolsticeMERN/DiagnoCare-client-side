import Banner from "./Banner/Banner";
import Doctors from "./Doctor/Doctors";
import FeatureTests from "./FeaturedTests/FeatureTests";
import Promotions from "./Promotions/Promotions";

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
      <Promotions/>
      <Doctors/>
    </div>
  );
};

export default Home;
