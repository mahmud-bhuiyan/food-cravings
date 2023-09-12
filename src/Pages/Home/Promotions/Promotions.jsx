import chef from "../../../assets/chef.png";

const Promotions = () => {
  return (
    <section className="flex items-center justify-center my-10 px-4 lg:px-2">
      <div className="card lg:card-side">
        <div className="flex flex-col items-center justify-center gap-4 py-20 px-2 sm:px-6">
          <h2 className="card-title font-montserrat text-center text-xl md:text-3xl lg:text-4xl">
            Everyone can be a chef in their own kitchen
          </h2>
          <p className="font-palanquin text-center text-xl lg:text-2xl">
            Explore our chefs and their awesome recipes. Make your own food.
            Taste the restaurant&apos;s recipe on your table.
          </p>
          <button className="bg-purple-500 text-white  hover:bg-purple-800 py-2 px-6 rounded-md mt-4">
            Learn More
          </button>
        </div>
        <figure className="my-5">
          <img src={chef} alt="chef" />
        </figure>
      </div>
    </section>
  );
};

export default Promotions;
