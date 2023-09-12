import Button from "../../../Components/Button";
import SectionHeader from "../../../Components/SectionHeader";
import { i1 } from "../../../assets/instagram";

const InstagramPosts = () => {
  return (
    <section className="max-container px-4 lg:px-2">
      <SectionHeader
        text="@foodcravings on Instagram"
        textStyle="text-center mt-20  pt-12"
        subText={"See what our users say about our recipes."}
        subStyle={"text-center my-6 font-palanquin font font-medium"}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-4 pt-6 pb-16">
        <div className="card">
          <figure>
            <img src={i1} alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={i1} alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={i1} alt="Shoes" />
          </figure>
        </div>
        <div className="card">
          <figure>
            <img src={i1} alt="Shoes" />
          </figure>
        </div>
      </div>
      <Button
        text="See Our Instagram"
        divStyle="flex justify-center pb-16"
      ></Button>
    </section>
  );
};

export default InstagramPosts;
