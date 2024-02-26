import "./MobNav.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 150 : 0,
        height: open ? 200 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [animate, open, staggerList]);

  return (
    <div ref={scope}>
      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
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
      </motion.button>
      <ul className="absolute top-14 right-10 h-[60svh] w-[60vw]">
        {items.map((item, index) => (
          <motion.li key={index}>{item}</motion.li>
        ))}
      </ul>
    </div>
  );
}
