import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import SectionHeader from "../../Components/SectionHeader";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Helmet } from "react-helmet-async";
import Newsletter from "../../Components/Newsletter";

const RecipeDetails = () => {
  const [recipeData, setRecipe] = useState(null);

  const { id } = useParams();
  const apiUrl = `https://food-cravings-server-mahmud-bhuiyan.vercel.app/recipe/${id}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setRecipe(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [apiUrl]);

  return (
    <div className="max-container">
      {recipeData ? (
        <>
          <Helmet>
            <title>
              {recipeData[0]?.recipe_name.split(" ").slice(0, 2).join(" ")} |
              Food Cravings
            </title>
          </Helmet>
          <SectionHeader
            text={`${recipeData[0].recipe_name}`}
            textStyle="font-montserrat !mt-10 mb-4"
            subText="Learn more about this recipe"
            divStyle="text-center mb-10"
          />
          <div className="my-8">
            {recipeData.map((recipe, index) => (
              <div
                className="card rounded-md bg-base-100 drop-shadow px-2 lg:px-5 m-2"
                key={index}
              >
                <div className="grid md:flex gap-4 px-1 py-3  md:py-6">
                  <div className="grid justify-center">
                    {/* image */}
                    <figure className="pt-3 md:pt-0 w-full md:w-[350px]">
                      <img
                        src={recipe.image}
                        alt={recipe.recipe_name}
                        className="rounded"
                      />
                    </figure>

                    <div className="text-center">
                      {/* recipe_name */}
                      <h2 className="mt-5 font-montserrat text-lg sm:text-xl md:text-2xl font-bold">
                        {recipe.recipe_name}
                      </h2>

                      {/* rating */}
                      <div className="flex flex-wrap justify-center mt-3">
                        <Rating
                          style={{ maxWidth: 150 }}
                          value={recipe.rating}
                          readOnly
                        />
                        <p className="flex items-end pl-1 text-xs font-montserrat font-semibold">
                          ({recipe.rating})
                        </p>
                      </div>

                      {/* Time */}
                      <p className="pt-4 text-lg">
                        <span className="font-palanquin font-bold text-purple-600">
                          Time:
                        </span>{" "}
                        {recipe.time} minutes
                      </p>

                      {/* Type */}
                      <p className="mt-2 text-lg">
                        <span className="font-palanquin font-bold text-purple-600">
                          Type:
                        </span>{" "}
                        {recipe.type}
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* Ingredients */}
                    <div>
                      <p className="font-palanquin font-bold text-purple-600 underline text-lg">
                        Ingredients
                      </p>
                      <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index}>{`${index + 1}. ${ingredient}`}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Cooking Method */}
                    <div className="mt-2">
                      <p className="font-palanquin font-bold text-purple-600 underline text-lg">
                        Cooking Method
                      </p>
                      <ul>
                        {recipe.cooking_method
                          .split("\n")
                          .map((step, index) => (
                            <li key={index}>{`${step}`}</li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="card-actions justify-center">
            <Link
              to="/recipes"
              className="bg-purple-500 text-white hover:bg-purple-800 px-4 sm:px-10 py-2 rounded-lg flex flex-wrap"
            >
              See all recipes
            </Link>
          </div>

          {/* Newsletter section  */}
          <Newsletter />
        </>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <p>Loading chef data...</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
