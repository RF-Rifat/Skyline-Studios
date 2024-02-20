import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/shared/Error";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [{ path: "/", element: <App /> }],
  },
]);
