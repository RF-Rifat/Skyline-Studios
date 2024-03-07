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
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
