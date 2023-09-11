import {
  breakfast,
  chocolate,
  desert,
  lunch,
  meat,
  vegan,
} from "../../../assets/categories";

const Categories = () => {
  const categories = [
    {
      image: breakfast,
      name: "breakfast",
    },
    {
      image: chocolate,
      name: "chocolate",
    },
    {
      image: desert,
      name: "desert",
    },
    {
      image: lunch,
      name: "lunch",
    },
    {
      image: meat,
      name: "meat",
    },
    {
      image: vegan,
      name: "vegan",
    },
  ];

  return (
    <section className="my-4 mx-2 py-8">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Categories
        </h2>
      </div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="card w-auto bg-gradient-to-t from-slate-100 to-white bg-opacity-50 drop-shadow"
          >
            <figure className="px-10 pt-10">
              <img
                src={category.image}
                alt={category.name}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;