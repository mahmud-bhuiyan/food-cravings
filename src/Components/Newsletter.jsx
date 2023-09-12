import newsLatter from "../assets/news.png";
const Newsletter = () => {
  return (
    <section className="px-2 lg:px-4 my-20">
      <div className="card ">
        <figure className="rounded-2xl">
          <img src={newsLatter} alt="Shoes" className="w-full" />
        </figure>
      </div>
    </section>
  );
};

export default Newsletter;
