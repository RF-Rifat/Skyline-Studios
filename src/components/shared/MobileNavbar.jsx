import "./MobNav.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const items = [
    "Services",
    "About Us",
    "Work",
    "Our Process",
    "Career",
    "Blog",
  ];
  const staggerList = stagger(0.1, { startDelay: 0.25 });

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
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg lg:hidden focus:outline-none mr-6 lg:mr-0"
      >
        <div className="bg-[#FFFF00] px-5 py-2 text-black flex text-lg items-center rounded-full">
          <HiOutlineMenuAlt4 className="h-5 w-8" /> <span>Menu</span>
        </div>
      </motion.button>

      <ul className="absolute top-10 right-0 ul">
        {items.map((item, index) => (
          <motion.li className="li" key={index}>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
