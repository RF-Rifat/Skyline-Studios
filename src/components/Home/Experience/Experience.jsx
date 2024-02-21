import { useState, useRef } from "react";

const Experience = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };
  console.log(videoRef.current.paused);

  return (
    <div className="bg-white">
      <div className="showreel-sticky">
        <div className="about-title-content text-center">
          <section
            className="video-area"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            data-w-id="d9e2158d-dfd8-5a4e-bf9b-c7818e8daff5"
            style={{
              willChange: "transform, width, height",
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="video-embed w-embed">
              <video
                ref={videoRef}
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
            </div>

            {isHovering && (
              <div
                className="custom-image"
                style={{
                  position: "absolute",
                  top: mousePosition.y,
                  left: mousePosition.x,
                }}
              >
                <div className="relative h-32 w-32" onClick={handleVideoClick}>
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
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;
