import SectionHeader from "../../../Components/SectionHeader";
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
      <SectionHeader text="Categories" textStyle="mb-10" />

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
                className="rounded-xl w-16 md:w-24 lg:w-32"
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
