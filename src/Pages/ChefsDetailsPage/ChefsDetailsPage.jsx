import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SectionHeader from "../../Components/SectionHeader";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ChefsDetailsPage = () => {
  const [chefData, setChefData] = useState(null);

  const { id } = useParams();
  const apiUrl = `https://food-cravings-server-mahmud-bhuiyan.vercel.app/chefs/${id}`;

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setChefData(response.data[0]);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching chef data:", error);
      });
  }, [apiUrl]);

  const RecipeCard = ({ recipe }) => {
    return (
      <div className="card card-compact bg-base-100 shadow pt-4 py-4">
        <div className="flex justify-center">
          <figure className="w-[350px] h-[180px] border rounded-md">
            <img src={recipe.image} alt={recipe.recipe_name} />
          </figure>
        </div>

        <div className="card-body">
          <div className="grid justify-center">
            <h2 className="my-2 lg:my-0 font-montserrat text-lg sm:text-xl md:text-2xl font-bold">
              {recipe.recipe_name}
            </h2>
            <div className="flex flex-wrap my-2">
              <Rating
                style={{ maxWidth: 150 }}
                value={recipe.rating}
                readOnly
              />
              <p className="flex items-end pl-1 text-xs font-montserrat font-bold">
                ({recipe.rating})
              </p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="text-start px-4">
            <p className="font-palanquin font-bold text-purple-600 underline text-lg mb-2">
              Ingredients
            </p>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{`${index + 1}. ${ingredient}`}</li>
              ))}
            </ul>
          </div>

          {/* Cooking Method */}
          <div className="text-start px-4 mt-2">
            <p className="font-palanquin font-bold text-purple-600 underline text-lg mb-2">
              Cooking Method
            </p>
            <ul>
              {recipe.cooking_method.split("\n").map((step, index) => (
                <li key={index}>{`${step}`}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="max-container">
      {chefData ? (
        <div className="px-2 m-2 sm:m-4 md:m-10 text-center">
          <SectionHeader
            text={`${chefData.name}'s Recipes`}
            textStyle={"!mt-14 font-montserrat"}
          />
          <div className="mb-10">
            <div className="flex justify-center items-center align-middle">
              <img
                src={chefData.image}
                alt={chefData.name}
                width={200}
                className="mb-4 rounded"
              />
            </div>
            <h1 className="font-montserrat font-bold text-xl">
              Chef {chefData.name}
            </h1>
            <div className="flex flex-wrap justify-center gap-2 font-palanquin m-2">
              <p>
                <span className="font-bold">Country : </span>
                {chefData.country},
              </p>
              <p>
                <span className="font-bold">Total &#10084;&#65039; : </span>
                {chefData.likes}
              </p>
            </div>
            <p className="mb-2">
              <span className="font-bold">Experience : </span>
              {chefData.experience} years
            </p>
            <p className="mx-2 sm:mx-10 md:mx-20 lg:mx-40 font-palanquin">
              <span className="font-bold">Bio: </span>
              {chefData.bio}
            </p>
          </div>

          <h2 className="font-montserrat font-bold underline text-3xl mb-8">
            Some Signature Recipes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {chefData.recipes?.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <p>Loading chef data...</p>
        </div>
      )}
    </div>
  );
};

export default ChefsDetailsPage;
