import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useFollowPointer } from "./useFollowPointer";
const Text = () => {
  const targetRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { x, y } = useFollowPointer(videoRef);
  // scale
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const skew = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const m = useTransform(scrollYProgress, [0, 1], ["100%", "57%"]);
  const n = useTransform(scrollYProgress, [0, 1], ["-100%", "35%"]);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleVideoClick = () => {
    const video = document.getElementById("video");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  return (
    <>
      <div className="relative h-[200vh] hidden md:block" ref={targetRef}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.video
            className="absolute pointer-events-none w-full h-full object-cover rounded-lg video"
            poster="https://uiart.io/video/MM-reel.gif"
            autoPlay
            loop
            muted
            playsInline
            ref={videoRef}
            onClick={handleVideoClick}
            style={{
              scale,
              skew,
            }}
            src="https://uiart.io/video/main_showreel.mp4 "
          />
          {/* custom cursor */}

          <motion.div
            className={!isHovering && "hidden"}
            animate={{ x, y }}
            transition={{
              type: "spring",
              damping: 3,
              stiffness: 50,
              restDelta: 0.001,
            }}
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
            }}
          >
            <div
              className="relative h-32 w-32 spin"
              onClick={handleVideoClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src="https://assets-global.website-files.com/643f7373d3f6653157617339/6448e195835c273a8d71af34_Video%20Player%20Icon.svg"
                alt="play now"
                className="absolute inset-0 m-auto h-12 w-12"
              />
              <img
                loading="lazy"
                alt="play now"
                src="https://assets-global.website-files.com/643f7373d3f6653157617339/648050ec6410b577150dc4cf_video%20text%20circle.svg"
              />
            </div>
          </motion.div>
          {/* custom cursor */}
          <motion.h2
            className="text-6xl font-extrabold absolute w-full text-center"
            style={{ top: n }}
          >
            Elevating UX, Empowering
          </motion.h2>
          <motion.h2
            className="text-6xl text-[#7d7d82ff] font-extrabold absolute h-full flex items-center"
            style={{ right: m }}
          >
            Businesses,
          </motion.h2>
          <motion.h2
            className="text-6xl text-[#7d7d82ff] font-extrabold absolute h-full flex items-center"
            style={{ left: m }}
          >
            Redefining
          </motion.h2>
          <motion.h2
            className="text-6xl font-extrabold absolute  w-full text-center"
            style={{
              bottom: n,
            }}
          >
            Experiences...
          </motion.h2>
        </div>
      </div>
      <div className="md:hidden">
        <video
          id="experience-video"
          poster="https://uiart.io/video/MM-reel.gif"
          loop
          onClick={handleVideoClick}
        >
          <source
            src="https://uiart.io/video/main_showreel.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default Text;
