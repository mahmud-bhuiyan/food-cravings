import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../../Components/SectionHeader";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>All Chefs | Food Cravings</title>
      </Helmet>

      <SectionHeader
        text="Our popular chef's"
        textStyle="font-montserrat !mt-10 mb-4"
        subText="Find out our their best recipes"
        divStyle="text-center mb-10"
      />
      <div className="my-8">
        {chefsData.map((chef, index) => (
          <div
            className="card md:card-side bg-base-100 drop-shadow mb-4"
            key={index}
          >
            <div className="py-4 px-2 md:pl-8 grid sm:flex md:grid gap-4 justify-center">
              <figure className="w-[270px] sm:w-[350px] md:w-[250px] md:h-[250px]">
                <img src={chef.image} alt={chef.name} className="rounded-2xl" />
              </figure>
              <div className="grid">
                <h2 className="card-title mt-2 font-montserrat">{chef.name}</h2>
                <p>Country: {chef.country}</p>
                <p>Experience: {chef.experience} years</p>
                <p>Total Recipes: {chef.total_recipes}</p>
                <p>&#10084;&#65039;: {chef.likes}</p>
              </div>
            </div>
            <div className="card-body">
              {chef.recipes.map((recipe, index) => (
                <div key={index} className="flex space-x-2">
                  <img
                    style={{ borderRadius: "0 200px 200px 200px" }}
                    className="w-[100px] h-[100px]"
                    src={recipe.image}
                    alt={recipe.recipe_name}
                  />
                  <div>
                    <h3 className="uppercase">{recipe.recipe_name} --------</h3>
                    <p>Rating: {recipe.rating}</p>
                  </div>
                </div>
              ))}

              <div className="card-actions justify-end">
                <Link
                  to={`/${chef.name.replace(/\s+/g, "-")}/recipes`}
                  className="btn btn-sm btn-primary"
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
