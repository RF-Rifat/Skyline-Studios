import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
const Root = () => {
  return (
    <>
      <div className="absolute top-0 z-50 w-full">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Root;
