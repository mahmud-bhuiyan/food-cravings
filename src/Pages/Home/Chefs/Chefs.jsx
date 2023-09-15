import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../../Components/SectionHeader";

const Chefs = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("https://food-cravings-server-mahmud-bhuiyan.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        const randomChefs = getRandomChefs(data, 10);
        setChefsData(randomChefs);
      })
      .catch((error) => console.log(error));
  }, []);

  function getRandomChefs(array, count) {
    const shuffledArray = array.slice();
    const randomChefs = [];

    while (randomChefs.length < count && shuffledArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * shuffledArray.length);
      randomChefs.push(shuffledArray.splice(randomIndex, 1)[0]);
    }
    return randomChefs;
  }

  return (
    <section className="px-4 lg:px-2">
      <SectionHeader text="Check Out Popular Chief&lsquo;s" textStyle="mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-8">
        {chefsData.map((chef, index) => (
          <div className="card bg-base-100 drop-shadow-lg" key={index}>
            <figure className="px-4 pt-4">
              <img
                src={chef.image}
                alt={chef.name}
                className="rounded-xl w-[95%] sm:w-[230px]"
              />
              <p className="absolute top-4 right-7 font-palanquin font-bold bg-purple-500 text-white px-2 py-1 rounded-md">
                {chef.country}
              </p>
            </figure>
            <div className="card-body px-0 pt-2 pb-4 items-center text-center">
              <h2 className="text-lg sm:text-xl font-semibold font-montserrat">
                {chef.name}
              </h2>
              <div className="flex flex-wrap gap-6 p-0 font-palanquin">
                <p>Recipes: {chef.total_recipes}</p>
                <p>&#10084;&#65039;: {chef.likes}</p>
              </div>
              <Link
                className="w-[90%] btn btn-sm bg-purple-500 text-white hover:bg-purple-800"
                to={`/chef/${chef._id}/recipes`}
                // to={`/${chef.name.replace(/\s+/g, "-")}/recipes`}
              >
                {chef.name.split(" ")[0]}&lsquo;s Recipes
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link to="/chefs" className="flex justify-center">
        <button className="bg-purple-500 text-white hover:bg-purple-800 w-[40%] sm:w-[30%] md:w-[20%] py-2 rounded-lg">
          See All Chef&lsquo;s
        </button>
      </Link>
    </section>
  );
};

export default Chefs;
