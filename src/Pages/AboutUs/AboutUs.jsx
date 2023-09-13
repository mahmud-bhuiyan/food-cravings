import { Helmet } from "react-helmet-async";
import Newsletter from "../../Components/Newsletter";
import SectionHeader from "../../Components/SectionHeader";

const AboutUs = () => {
  return (
    <section className="max-container">
      <Helmet>
        <title>About Us | Food Cravings</title>
      </Helmet>
      
      <SectionHeader
        text={"About Us"}
        textStyle={"mt-10"}
        divStyle={"text-center mb-10"}
      />

      <div className="text-center font-montserrat">
        <p className="text-lg leading-7">
          Welcome to Food Cravings, your ultimate destination for culinary
          inspiration! We&lsquo;re passionate about sharing delicious recipes
          from around the world to satisfy your food cravings.
        </p>

        <p className="text-lg leading-7 mt-4">
          Our dedicated team of chefs and food enthusiasts is committed to
          curating a diverse collection of mouthwatering recipes that cater to
          all tastes and preferences. Whether you&lsquo;re a beginner cook or an
          experienced chef, you&lsquo;ll find something delightful here.
        </p>

        <p className="text-lg leading-7 mt-4">
          At Food Cravings, we believe in the joy of cooking and the power of
          good food to bring people together. We aim to make cooking accessible,
          fun, and rewarding for everyone.
        </p>

        <p className="text-lg leading-7 mt-4">
          Explore our recipes, learn from our talented chefs, and don&lsquo;t
          forget to check out our engaging blogs for cooking tips, food trends,
          and more. If you have any questions, suggestions, or just want to say
          hello, feel free to reach out to us through our contact form.
          We&lsquo;re here to enhance your culinary journey!
        </p>
      </div>
      <Newsletter />
    </section>
  );
};

export default AboutUs;
