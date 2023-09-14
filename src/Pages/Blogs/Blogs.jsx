import { useEffect, useState } from "react";
import SectionHeader from "../../Components/SectionHeader";
import Newsletter from "../../Components/Newsletter";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://food-cravings-server-mahmud-bhuiyan.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="max-container">
      <Helmet>
        <title>Blogs | Food Cravings</title>
      </Helmet>

      <SectionHeader
        text="Blog & Article"
        textStyle="font-montserrat !mt-10 mb-4"
        subText="Find out our best recipes"
        divStyle="text-center mb-10"
      />
      <div className="">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="mb-8 border grid md:flex gap-4 rounded-lg p-4 items-center"
          >
            <div>
              <div>
                <figure className="md:w-[350px]">
                  <img src={blog.image} alt={blog.author} className="rounded" />
                </figure>
              </div>
            </div>
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-montserrat mt-4 md:mt-0 mb-2">
                {blog.title}
              </h2>
              <p>
                <span className="font-semibold">Details:</span> {blog.details}
              </p>
              <div className="mt-4">
                <div className="flex items-center gap-4 font-palanquin">
                  <div className="flex items-center gap-4">
                    <img
                      src={blog.author_image}
                      alt={blog.author}
                      width={35}
                      className="rounded-full"
                    />
                    <p>
                      <span className="font-semibold">Author: </span>
                      {blog.author}
                    </p>
                  </div>
                  <p>
                    <span className="font-semibold">Date:</span> {blog.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Newsletter />
    </section>
  );
};

export default Blogs;
