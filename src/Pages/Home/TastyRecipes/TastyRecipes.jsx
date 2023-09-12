import { useEffect, useState } from "react";
import SectionHeader from "../../../Components/SectionHeader";
import { FaKitchenSet, FaStopwatch } from "react-icons/fa6";

const TastyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="max-container pb-10 px-4 lg:px-2">
      <SectionHeader
        text="Simple and tasty recipes"
        style="text-center mt-20 mb-10 pt-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="card card-compact bg-base-100 ">
            <figure>
              <img
                src={recipe.image}
                alt={recipe.recipe_name}
                className="border rounded-2xl p-2"
              />
            </figure>
            <div className="px-4 py-2 font-montserrat text-lg font-medium">
              <p>{recipe.recipe_name}</p>
            </div>

            <div className="px-4 pb-2 flex gap-4 font-palanquin font-medium items-center">
              <div className="flex items-center gap-2">
                <FaStopwatch /> : {recipe.time}
              </div>
              <div className="flex items-center gap-2">
                <FaKitchenSet /> : {recipe.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TastyRecipes;
