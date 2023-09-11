import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllChefsPage = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("chefs.json")
      .then((res) => res.json())
      .then((data) => {
        setChefsData(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="max-container">
      <div className="my-8">
        {chefsData.map((chef, index) => (
          <div
            className="card md:card-side bg-base-100 drop-shadow mb-4"
            key={index}
          >
            <figure
              style={{ minWidth: "300px", maxWidth: "300px" }}
              className="pl-8"
            >
              <img src={chef.image} alt={chef.name} className="rounded-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{chef.name}</h2>
              <p>{chef.bio}</p>
              <p>Country: {chef.country}</p>
              <p>Experience: {chef.experience} years</p>
              <p>Total Recipes: {chef.total_recipes}</p>
              <p>&#10084;&#65039;: {chef.likes}</p>

              {/* Mapping through chef's recipes */}
              {/* <h3>Recipes:</h3>
              <ul>
                {chef.recipes.map((recipe) => (
                  <li key={recipe.id}>
                    <h4>{recipe.recipe_name}</h4>
                    <img src={recipe.image} alt={recipe.recipe_name} />
                    <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                    <p>Cooking Method: {recipe.cooking_method}</p>
                    <p>Rating: {recipe.rating}</p>
                  </li>
                ))}
              </ul> */}

              <div className="card-actions justify-end">
                <Link
                  to={`/${chef.name.replace(/\s+/g, "-")}/recipes`}
                  className="btn btn-primary"
                >
                  See all recipes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllChefsPage;
