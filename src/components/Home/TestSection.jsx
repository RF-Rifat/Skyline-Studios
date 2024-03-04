import { motion, useTransform, useScroll } from "framer-motion";

const ScrollTextTransformSection = () => {
  const { scrollYProgress } = useScroll({});

  // scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const skew = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "57%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["-100%", "35%"]);

  return (
    <div className="relative h-[200vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.video
          className="absolute pointer-events-none w-full h-full object-cover rounded-lg"
          poster="https://uiart.io/video/MM-reel.gif"
          autoPlay
          loop
          muted
          playsInline
          style={{
            scale,
            skew,
          }}
          src="https://uiart.io/video/main_showreel.mp4 "
        />

        <motion.h2
          className="text-6xl font-extrabold absolute w-full text-center"
          style={{ top: y }}
        >
          Elevating UX, Empowering
        </motion.h2>
        <motion.h2
          className="text-6xl text-[#7d7d82ff] font-extrabold absolute h-full flex items-center"
          style={{ right: x }}
        >
          Businesses,
        </motion.h2>
        <motion.h2
          className="text-6xl text-[#7d7d82ff] font-extrabold absolute h-full flex items-center"
          style={{ left: x }}
        >
          Redefining
        </motion.h2>
        <motion.h2
          className="text-6xl font-extrabold absolute  w-full text-center"
          style={{
            bottom: y,
          }}
        >
          Experiences...
        </motion.h2>
      </div>
    </div>
  );
};

export default ScrollTextTransformSection;
