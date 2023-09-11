import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Chefs from "../Chefs/Chefs";

const Home = () => {
  return (
    <div className="min-h-screen max-container">
      <Banner />
      <Categories />
      <Chefs />
    </div>
  );
};

export default Home;
