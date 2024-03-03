import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { AiOutlineRollback } from "react-icons/ai";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="bg-[#FFFF00] px-5 py-2 text-black flex text-lg items-center rounded-full lg:hidden cursor-pointer"
      >
        <HiOutlineMenuAlt4 className="h-5 w-8" /> <span>Menu</span>
      </div>
      <div className="bg-black">
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
                className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
                // style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              ></motion.div>
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 bottom-0 right-0 z-50 w-full h-screen max-w-xs border-l-2 border-zinc-800 bg-black "
                ref={ref}
                aria-label="Sidebar"
              >
                <div className="flex bg-black items-center justify-between p-5 border-b-2 border-zinc-800">
                  {/* <img src="/logoBlack.svg" className="h-7" alt="Nav Logo" /> */}
                  <button
                    onClick={toggleSidebar}
                    className="p-3 border-2 border-zinc-800 rounded-xl"
                    aria-label="close sidebar"
                  >
                    <AiOutlineRollback className="rotate-180" />
                  </button>

                  <img src="/logoWhite.svg" className="h-7" alt="Nav Logo" />
                </div>
                <ul className="bg-black ">
                  {items.map((item, idx) => {
                    const { title, href, Icon } = item;
                    return (
                      <li key={title}>
                        <a
                          onClick={toggleSidebar}
                          href={href}
                          className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:bg-zinc-900 border-zinc-800"
                        >
                          <motion.span
                            className="text-white"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + idx / 10 }}
                          >
                            {title}
                          </motion.span>
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: 1.5,
                            }}
                          >
                            <Icon className="text-2xl text-white" />
                          </motion.div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const items = [
  { title: "Home", Icon: BiHomeSmile, href: "#" },
  { title: "About", Icon: BiUser },
  { title: "Contact", Icon: HiOutlineChatBubbleBottomCenterText, href: "#" },
  { title: "Settings", Icon: FiSettings, href: "#" },
];
