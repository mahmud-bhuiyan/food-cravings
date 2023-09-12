import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllChefsPage from "../Pages/AllChefsPage/AllChefsPage";
import Recipes from "../Pages/Recipes/Recipes";

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
        path: "/all-chefs",
        element: <AllChefsPage />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
    ],
  },
]);

export default router;
