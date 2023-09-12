import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { banner1 } from "../../../assets/banner";

const Banner = () => {
  return (
    <section className="px-4 sm:px-2 mt-8">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={banner1} className="rounded-xl" />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
