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
          className="tracking-tight leading-snug font-bold text-6xl lg:text-7xl xl:text-8xl pt-32 pb-20 px-4"
        >
          Fueling Minds <br />
          <span className="text-gray-600"> — Inspiring Designs..</span>
        </motion.div>
      </motion.div>
      <div className="breadcrumb-thumbnaiil-wrap z-index">
        <img
          src="https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team.webp"
          alt="About Us"
          // srcSet="https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team-p-500.webp 500w, https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team-p-800.webp 800w, https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team-p-1080.webp 1080w, https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team-p-1600.webp 1600w, https://assets-global.website-files.com/643f7373d3f6653157617339/6576c7a25f51682c8ffa29e1_musemind-team.webp 1920w"
          className="w-full h-80 lg:h-full"
        />
        <div data-aos="fade-down" />
      </div>
    </>
  );
};

export default AboutBanner;
