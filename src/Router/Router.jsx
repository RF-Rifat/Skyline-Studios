import { createBrowserRouter } from "react-router-dom";
import Error from "../components/shared/Error";
import Root from "./Root";
import Home from "../pages/Home";
import { ContactUs } from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/aboutUs", element: <AboutUs /> },
    ],
  },
]);
