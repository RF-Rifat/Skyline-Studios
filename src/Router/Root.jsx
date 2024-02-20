import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
