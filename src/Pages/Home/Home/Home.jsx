import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Chefs from "../Chefs/Chefs";
import TastyRecipes from "../TastyRecipes/TastyRecipes";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="max-container">
        <Banner />
      </section>
      <section className="max-container">
        <Categories />
      </section>
      <section className="max-container">
        <Chefs />
      </section>
      <section className="bg-sky-200">
        <TastyRecipes />
      </section>
    </div>
  );
};

export default Home;
