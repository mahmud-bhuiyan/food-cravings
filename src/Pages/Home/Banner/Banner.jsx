import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  banner4,
  banner5,
} from "../../../assets/banner-images";

const Banner = () => {
  return (
    <>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={banner5} />
        </div>

        <div>
          <img src={banner4} />
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
