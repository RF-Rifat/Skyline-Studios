import { useRef } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import "./Spin.css";
import { useFollowPointer } from "./useFollowPointer";

const Experience = () => {
  const videoRef = useRef(null);
  const ref = useRef(null);
  const controls = useAnimation();
  const { scrollY } = useViewportScroll();
  const { x, y } = useFollowPointer(ref);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  scrollY.onChange((latest) => {
    const scale = Math.max(0.1, 1 - latest / 1000);
    controls.start({ scale: scale });
  });

  return (
    <div className="bg-white">
      <div className="showreel-sticky">
        <div className="about-title-content text-center">
          <motion.section
            style={{
              willChange: "transform, width, height",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.div
              ref={videoRef}
              animate={controls}
              className="video-embed w-embed"
            >
              <video
                className="wb-video-styles-controller"
                poster="https://uiart.io/video/MM-reel.gif"
                loop
                onClick={handleVideoClick}
              >
                <source
                  src="https://uiart.io/video/main_showreel.mp4"
                  type="video/mp4"
                />
              </video>
            </motion.div>

            <motion.div
              ref={ref}
              className="box"
              animate={{ x, y }}
              transition={{
                type: "spring",
                damping: 3,
                stiffness: 50,
                restDelta: 0.001,
              }}
              style={{
                position: "absolute",
              }}
            >
              <div
                className="relative h-32 w-32 spin"
                onClick={handleVideoClick}
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
                  className=""
                />
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
