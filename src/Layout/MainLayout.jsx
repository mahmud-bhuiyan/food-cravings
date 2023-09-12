import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <section className="pb-20 bg-sky-100">
        <Navbar />
      </section>

      <section className="">
        <Outlet />
      </section>

      <section className="py-8 bg-sky-50">
        <Footer />
      </section>
    </div>
  );
};

export default MainLayout;
