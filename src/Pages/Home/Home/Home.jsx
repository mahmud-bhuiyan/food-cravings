import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Chefs from "../Chefs/Chefs";
import InstagramPosts from "../InstagramPosts/InstagramPosts";
import Promotions from "../Promotions/Promotions";
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
      <section className="bg-sky-100">
        <TastyRecipes />
      </section>
      <section className="max-container">
        <Promotions />
      </section>
      <section className="bg-sky-100">
        <InstagramPosts />
      </section>
    </div>
  );
};

export default Home;
