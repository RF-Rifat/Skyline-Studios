import { useRef, useState } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import "./Spin.css";
import { useFollowPointer } from "./useFollowPointer";
import ExDesc from "./ExDesc";

const Experience = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();
  const { x, y } = useFollowPointer(ref);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleVideoClick = () => {
    const video = ref.current;
    if (video?.paused) {
      video.pause();
    } else if (video) {
      video.play();
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  scrollY.onChange((latest) => {
    const scale = Math.max(0.1, 1 - latest / 1000);
    controls.start({ scale: scale });
    setIsScrolled(latest > 0);
  });

  return (
    <div className="bg-white overflow-hidden relative">
      <div className="text-center">
        <motion.section
          style={{
            willChange: "transform, width, height",
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          }}
        >
          <motion.div
            animate={controls}
            className="video-embed w-embed relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={ref}
              poster="https://uiart.io/video/MM-reel.gif"
              loop
              onClick={handleVideoClick}
            >
              <source
                src="https://uiart.io/video/main_showreel.mp4"
                type="video/mp4"
              />
            </video>
            {isHovering && (
              <div className="absolute top-0 left-0">
                <img
                  src="https://example.com/mouse-image.png"
                  alt="Mouse"
                  className="mouse-image"
                />
              </div>
            )}
          </motion.div>

          <motion.div
            ref={ref}
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
        </motion.section>
      </div>
      {isScrolled && (
        <div className="flex justify-between">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-block"
          >
            Text 1
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-block"
          >
            Text 2
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-block"
          >
            Text 3
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-block"
          >
            Text 4
          </motion.div>
        </div>
      )}
      <ExDesc />
    </div>
  );
};

export default Experience;
