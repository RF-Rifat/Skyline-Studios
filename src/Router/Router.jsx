import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/shared/Error";
 
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
  },
]);
