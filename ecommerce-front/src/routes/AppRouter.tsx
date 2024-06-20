import { RouterProvider, createBrowserRouter } from "react-router-dom";
//Layout
import MainLayout from "@layouts/MainLayout/MainLayout";
//Pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
