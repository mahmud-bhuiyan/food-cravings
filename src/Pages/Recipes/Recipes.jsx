import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import poster from "../../assets/poster.png";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1: State for search query
  const recipesPerPage = 10;

  useEffect(() => {
    fetch("recipes.json")
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
  ); // Step 2: Filter recipes based on the search query

  // Function to get the recipes for the current page
  const getCurrentPageRecipes = () => {
    const startIndex = (page - 1) * recipesPerPage;
    const endIndex = startIndex + recipesPerPage;
    return filteredRecipes.slice(startIndex, endIndex);
  };

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  // Step 2: Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="max-container mb-10">
      <SectionHeader
        text="Recipes"
        textStyle="font-montserrat !mt-10 mb-4"
        subText="Find out our best recipes"
        divStyle="text-center mb-10"
      />

      {/*search bar */}
      <div className="search-bar flex justify-center">
        <input
          type="text"
          placeholder="Search recipes..."
          onChange={handleSearchInputChange}
          value={searchQuery}
          className="w-[40%] border rounded py-1 px-2 mb-10"
        />
      </div>

      {/* left side */}
      <div className="lg:grid grid-cols-3 px-2 gap-8">
        <div className="col-span-2">
          {getCurrentPageRecipes().map((recipe, index) => (
            <div key={index} className="grid lg:flex gap-4 mb-10">
              <div>
                <figure className="lg:w-[250px] lg:border">
                  <img src={recipe.image} alt={recipe.recipe_name} />
                </figure>
              </div>
              <div className="">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-montserrat">
                  {recipe.recipe_name}
                </h2>
                <div className="flex gap-4 font-palanquin">
                  <p>
                    <span className="font-semibold">Time:</span> {recipe.time}{" "}
                    minutes
                  </p>
                  <p>
                    <span className="font-semibold">Type:</span> {recipe.type}
                  </p>
                  <p>
                    <span className="font-semibold">Rating:</span>{" "}
                    {recipe.rating}
                  </p>
                </div>
                <h3 className="font-palanquin">
                  <span className="font-semibold">Ingredients:</span>{" "}
                  {recipe.ingredients.join(", ")}
                </h3>
                <h3 className="font-palanquin">
                  <span className="font-semibold">Cooking Method:</span>{" "}
                  {recipe.cooking_method.length > 160 ? (
                    <>
                      {recipe.cooking_method.substring(0, 160)}...
                      <a href="#" className="text-blue-600 font-semibold">
                        See Details
                      </a>
                    </>
                  ) : (
                    recipe.cooking_method
                  )}
                </h3>
                <p></p>
              </div>
            </div>
          ))}
          {/* Pagination Buttons */}
          <div className="join flex justify-center">
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
                  <h2 className="text-sm">{recipe.recipe_name}</h2>
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
    </section>
  );
};

export default Recipes;
