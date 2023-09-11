import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className="">
        <Outlet />
      </section>

      <section className="py-8">
        <Footer />
      </section>
    </div>
  );
};

export default MainLayout;
