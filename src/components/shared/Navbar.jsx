import { Link } from "react-router-dom";
import Button from "./Button/Button";
import { useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      console.log(top);
      if (prevScrollpos > currentScrollPos) {
        setTop(0);
      } else {
        setTop(-100);
      }
      setPrevScrollpos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  const NavLinks = [
    {
      title: "Services",
      link: "services",
    },
    {
      title: "About Us",
      link: "aboutUs",
    },
    {
      title: "Work",
      link: "work",
    },
    {
      title: "Our Process",
      link: "ourProcess",
    },
    {
      title: "Career",
      link: "career",
    },
    {
      title: "Blog",
      link: "blog",
    },
  ];
  return (
    <>
      <nav
        className={`bg-heroBg py-4 px-10`}
        style={{
          position: "sticky",
          top: `${top}px`,
          zIndex: 100,

          transition: "all 0.4s ease-out",
        }}
      >
        <div className="grid grid-flow-col items-center justify-between mx-auto">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logoBlack.svg" className="h-6" alt="Nav Logo" />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="hidden lg:flex justify-end w-52">
              <Button
                text={"Contact Us"}
                color={"bg-[#FFFF00]"}
                fontClr={"text-[#000000]"}
              />
            </div>
            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button> */}
            <MobileNavbar />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row">
              {NavLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item?.link}
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0 text-base font-semibold"
                    aria-current="page"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
