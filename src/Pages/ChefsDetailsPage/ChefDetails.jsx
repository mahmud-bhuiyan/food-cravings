import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChefDetails = () => {
  const [chefData, setChefData] = useState(null);

  const { id } = useParams();
  const apiUrl = `chefs.json/${id}`;

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

  return (
    <div className="max-container">
      {chefData ? (
        <div>
          <h1>{chefData.name}&lsquo;s Recipes</h1>
          {/* Display other chef details here */}
          <p>Country: {chefData.country}</p>
          <p>Experience: {chefData.experience} years</p>
          <p>Total Likes: {chefData.likes}</p>
          <p>Bio: {chefData.bio}</p>
          <h2>Recipes</h2>
          <div className="recipes-container">
            {chefData.recipes?.map((recipe) => (
              <div key={recipe._id} className="recipe-card">
                <img src={recipe.image} alt={recipe.recipe_name} />
                <h3>{recipe.recipe_name}</h3>
                <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                <p>Cooking Method: {recipe.cooking_method}</p>
                <p>Rating: {recipe.rating}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading chef data...</p>
      )}
    </div>
  );
};

export default ChefDetails;
