import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import poster from "../../assets/poster.png";
import Newsletter from "../../Components/Newsletter";
import { Helmet } from "react-helmet-async";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const recipesPerPage = 10;

  useEffect(() => {
    fetch("https://food-cravings-server-mahmud-bhuiyan.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const topRatedRecipes = recipes
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.recipe_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCurrentPageRecipes = () => {
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return filteredRecipes.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="max-container mb-10">
      <Helmet>
        <title>Recipes | Food Cravings</title>
      </Helmet>

      <SectionHeader
        text="Recipes"
        textStyle="font-montserrat !mt-10 mb-4"
        subText="Find out our best recipes"
        divStyle="text-center mb-10"
      />
      {/*search bar */}
      <div className="search-bar flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search recipes..."
          onChange={handleSearchInputChange}
          value={searchQuery}
          className="w-[40%] border rounded py-1 px-2 mb-10"
        />
      </div>
      <div className="lg:grid grid-cols-3 px-4 gap-8">
        <div className="col-span-2">
          {getCurrentPageRecipes().map((recipe, index) => (
            <div key={index} className="grid lg:flex gap-4 mb-20">
              <div className="flex justify-center">
                <figure className="lg:w-[250px] lg:border">
                  <img src={recipe.image} alt={recipe.recipe_name} />
                </figure>
              </div>
              <div>
                <div className="text-center lg:text-start">
                  {/* recipe_name */}
                  <h2 className="my-2 lg:my-0 font-montserrat text-lg sm:text-xl md:text-2xl font-bold">
                    {recipe.recipe_name}
                  </h2>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 font-palanquin my-2">
                    <p>
                      <span className="font-semibold">Time:</span> {recipe.time}{" "}
                      minutes
                    </p>
                    <p>
                      <span className="font-semibold">Type:</span> {recipe.type}
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="flex flex-wrap  justify-center lg:justify-start my-2">
                    <Rating
                      style={{ maxWidth: 150 }}
                      value={recipe.rating}
                      readOnly
                    />
                    <p className="flex items-end pl-1 text-xs font-montserrat font-semibold">
                      ({recipe.rating})
                    </p>
                  </div>
                </div>
                <div className="px-2 sm:mx-10 lg:mx-0">
                  {/* Ingredients */}
                  <h3 className="font-palanquin">
                    <span className="font-bold text-lg">Ingredients:</span>{" "}
                    {recipe.ingredients.join(", ")}
                  </h3>
                  {/* Cooking Method */}
                  <h3 className="font-palanquin mt-2">
                    <span className="font-bold text-lg">Cooking Method:</span>{" "}
                    {recipe.cooking_method.length > 160 ? (
                      <>
                        {recipe.cooking_method.substring(0, 160)}...
                        <Link
                          to={`/recipe/${recipe._id}`}
                          className="text-blue-600 font-semibold"
                        >
                          See Details
                        </Link>
                      </>
                    ) : (
                      recipe.cooking_method
                    )}
                  </h3>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination Buttons */}
          <div className="join flex justify-center mb-10">
            {Array.from(
              { length: Math.ceil(filteredRecipes.length / recipesPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`join-item btn btn-sm ${
                    page === i + 1 ? "btn-active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>

        {/* right side */}
        <div className="col-span-1 px-2">
          <h2 className="font-montserrat font font-semibold text-xl">
            Tasty Recipes
          </h2>
          <div className="grid md:flex lg:grid gap-4 justify-between">
            <div>
              {topRatedRecipes.map((recipe, index) => (
                <div
                  key={index}
                  className="grid sm:flex items-center my-4 gap-4 p-2"
                >
                  <figure className="md:max-w-[200px] lg:border">
                    <img
                      src={recipe.image}
                      alt={recipe.recipe_name}
                      className="border"
                    />
                  </figure>
                  <h2 className="text-sm font-montserrat font-semibold">
                    {recipe.recipe_name}
                  </h2>
                </div>
              ))}
            </div>
            <div className=" px-2">
              <figure>
                <img src={poster} alt="Shoes" className="w-[400px]" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter component */}
      <Newsletter />
    </section>
  );
};

export default Recipes;
