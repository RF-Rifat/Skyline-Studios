import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const AboutBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        style={{
          rotateY: isInView ? "10deg" : "-90deg",
        }}
        className="max-w-[1440px] mx-auto"
        ref={ref}
      >
        <motion.div
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="font-bold text-6xl lg:text-7xl xl:text-8xl pt-32 pb-20 px-4"
        >
          Fueling Minds <br />
          <span className="text-gray-600"> — Inspiring Designs..</span>
        </motion.div>
      </motion.div>
      <div className="z-10">
        <img
          src="https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team.webp"
          alt="About Us"
          className="w-full h-80 lg:h-full"
        />
      </div>
    </>
  );
};

export default AboutBanner;
