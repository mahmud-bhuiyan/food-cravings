import { FaComment, FaEnvelope, FaPhone, FaTag, FaUser } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from "../../assets/contact.png";
import SectionHeader from "../../Components/SectionHeader";
import Newsletter from "../../Components/Newsletter";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.from_name.value;
    const email = e.target.from_email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    if (name && email && subject && message) {
      toast.success("Message sent");
    } else {
      toast.error("Please fill in all required fields.");
    }
  };

  return (
    <section className="max-container my-10">
      <Helmet>
        <title>Contact | Food Cravings</title>
      </Helmet>

      <SectionHeader
        text="Contact Us"
        textStyle="font-montserrat !mt-10 mb-4"
        divStyle="text-center mb-10"
      />
      {/* contact form */}

      <div className="grid md:flex justify-center gap-8">
        <div className="">
          <figure className="rounded-2xl">
            <img
              src={contact}
              alt="contact"
              className="w-[200px] md:w-[300px]"
            />
          </figure>
        </div>
        <div className="mt-6">
          <form onSubmit={onSubmit}>
            <div className="md:flex md:gap-4">
              <div className="form-control md:w-1/2 relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaUser className="text-dark/75 dark:text-light/75" />
                </span>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  className="border-dark/50 dark:border-light/50 border-b-2 pl-10 py-2 w-full bg-transparent outline-none focus:border-b-2"
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-control md:w-1/2 relative mt-3 md:mt-0">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaPhone className="text-dark/75 dark:text-light/75" />
                </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="border-dark/50  dark:border-light/50 border-b-2 pl-10 py-2 w-full bg-transparent outline-none focus:border-b-2"
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="form-control relative mt-3">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaEnvelope className="text-dark/75 dark:text-light/75" />
              </span>
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="border-dark/50  dark:border-light/50 border-b-2 pl-10 py-2 w-full bg-transparent outline-none focus:border-b-2"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-control relative mt-3">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <FaTag className="text-dark/75 dark:text-light/75" />
              </span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border-dark/50  dark:border-light/50 border-b-2 pl-10 py-2 w-full bg-transparent outline-none focus:border-b-2"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-control relative mt-3">
              <span className="absolute left-3 top-6 transform -translate-y-1/2">
                <FaComment className="text-dark/75 dark:text-light/75" />
              </span>
              <textarea
                name="message"
                placeholder="Message"
                className="border-dark/50  dark:border-light/50 border-b-2 pl-10 py-2 w-full h-40 bg-transparent outline-none focus:border-b-2"
                required
              ></textarea>
            </div>

            <div className="form-control mt-3">
              <input
                className="btn text-white hover:bg-purple-500 hover:text-dark bg-purple-300 transition duration-3000 border-0"
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

export default Contact;
