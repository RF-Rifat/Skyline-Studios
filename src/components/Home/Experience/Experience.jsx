import { useRef, useState } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import "./Spin.css";
import { useFollowPointer } from "./useFollowPointer";
import ExDesc from "./ExDesc";

const Experience = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const textControls = useAnimation();
  const { scrollY } = useViewportScroll();

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
  scrollY.onChange((latest) => {
    const size = Math.max(1, 1 + latest / 1000);
    console.log(latest);
    textControls.start({ scale: size });
    setIsScrolled(latest > 0);
  });

  return (
    <div className="bg-white overflow-hidden relative">
      <div className="text-center relative">
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
        </motion.section>
        <motion.div
          className="absolute top-0"
          animate={textControls}
          data-aos="fade-down"
        >
          Elevating UX, Empowering
        </motion.div>
        <motion.div
          className="absolute bottom-0 text-center"
          animate={textControls}
          data-aos="fade-down"
        >
          Experiences...
        </motion.div>
        <motion.div
          className="absolute left-0 translate-x-1/2"
          animate={textControls}
          data-aos="fade-down"
        >
          Businesses,
        </motion.div>
        <motion.div
          className="absolute right-0"
          animate={textControls}
          data-aos="fade-down"
        >
          Redefining
        </motion.div>
      </div>
      <ExDesc />
    </div>
  );
};

export default Experience;
