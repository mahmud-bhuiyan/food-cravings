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
      <div className="card card-compact bg-base-100 shadow pt-4 flex items-center">
        <figure className="w-[250px] h-[150px] border rounded">
          <img src={recipe.image} alt={recipe.recipe_name} />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title ">{recipe.recipe_name}</h2>
          <div className="flex flex-wrap">
            <Rating style={{ maxWidth: 150 }} value={recipe.rating} readOnly />
            <p className="flex items-end pl-1 text-xs font-montserrat font-semibold">
              ({recipe.rating})
            </p>
          </div>
          <p>
            <span className="font-semibold">Ingredients : </span>
            {recipe.ingredients.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Cooking Method : </span>{" "}
            {recipe.cooking_method}
          </p>
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
            <h1 className="font-montserrat font-bold">Chef {chefData.name}</h1>
            <div className="flex flex-wrap justify-center gap-2 font-palanquin m-2">
              <p>
                <span className="font-semibold">Country : </span>
                {chefData.country},
              </p>
              <p>
                <span className="font-semibold">Experience : </span>
                {chefData.experience} years,
              </p>
              <p>
                <span className="font-semibold">Total &#10084;&#65039; : </span>
                {chefData.likes}
              </p>
            </div>
            <p className="mx-2 sm:mx-10 md:mx-20 lg:mx-40 font-palanquin">
              <span className="font-semibold">Bio: </span>
              {chefData.bio}
            </p>
          </div>

          <h2 className="font-montserrat font-semibold underline mb-8">
            Some Signature Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {chefData.recipes?.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading chef data...</p>
      )}
    </div>
  );
};

export default ChefsDetailsPage;
