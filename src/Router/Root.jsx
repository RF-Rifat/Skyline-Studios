import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Root = () => {
  useEffect(() => {
    AOS.init();
  }, []);
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
