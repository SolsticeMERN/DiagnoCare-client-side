import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Doctors from "./Doctor/Doctors";
import FeatureTests from "./FeaturedTests/FeatureTests";
import Promotions from "./Promotions/Promotions";
import Recommend from "./Recommend/Recommend";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home - DaignoCare</title>
      </Helmet>
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
      <Recommend/>
    </div>
    </>
  );
};

export default Home;
