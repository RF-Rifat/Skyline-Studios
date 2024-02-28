import { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import "./Spin.css";
import { useFollowPointer } from "./useFollowPointer";
import ExDesc from "./ExDesc";

const Experience = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const textControls = useAnimation();
  const { scrollY } = useViewportScroll();
  const { x, y } = useFollowPointer(ref);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hasScrolledToOtherPage, setHasScrolledToOtherPage] = useState(false);

  const handleVideoClick = () => {
    const video = document.getElementById("experience-video");
    if (video.paused) {
      video.play();
      setIsVideoPlaying(true);
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    scrollY.onChange((latest) => {
      const scale = Math.max(0.1, 1 - latest / 1000);
      controls.start({ scale: hasScrolledToOtherPage ? scale : 1 });
      setIsScrolled(latest > 0);
      if (!hasScrolledToOtherPage && latest > 100) {
        setHasScrolledToOtherPage(true);
      }
    });
  }, [scrollY, controls, hasScrolledToOtherPage]);

  useEffect(() => {
    scrollY.onChange((latest) => {
      const size = Math.max(1, 1 + latest / 800);
      textControls.start({ scale: size });
      setIsScrolled(latest > 0);
    });
  }, [scrollY, textControls]);

  return (
    <>
      <div className="bg-white overflow-hidden relative hidden lg:block">
        <div className="text-center">
          <motion.section
            // animate={controls}
            className="relative"
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
            <motion.div
              className={`absolute top-44 mx-auto w-full`}
              animate={textControls}
              initial={{ scale: 1, opacity: 1 }}
              data-aos="fade-down"
            >
              Elevating UX, Empowering
            </motion.div>
            <motion.div
              className="absolute left-64 top-1/2 translate-y-1/2"
              animate={textControls}
              initial={{ scale: 1, opacity: 1 }}
              // data-aos="fade-right"
            >
              Businesses,
            </motion.div>
            <motion.div
              className="absolute right-64 top-1/2 translate-y-1/2"
              animate={textControls}
              // data-aos="fade-up-right"
            >
              Redefining
            </motion.div>

            <motion.div
              className="absolute bottom-60 mx-auto w-full"
              animate={textControls}
              data-aos="fade-up"
            >
              Experiences...
            </motion.div>
          </motion.section>
        </div>
        <ExDesc />
      </div>

      <div className="lg:hidden">
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

export default Experience;
