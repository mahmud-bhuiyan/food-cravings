import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ChefsDetailsPage from "../Pages/ChefsDetailsPage/ChefsDetailsPage";
import AllChefsPage from "../Pages/AllChefsPage/AllChefsPage";
import Recipes from "../Pages/Recipes/Recipes";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import AboutUs from "../Pages/AboutUs/AboutUs";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "chef/:id/recipes",
        element: <ChefsDetailsPage />,
      },
      {
        path: "/chefs",
        element: <AllChefsPage />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "recipe/:id",
        element: <RecipeDetails />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
