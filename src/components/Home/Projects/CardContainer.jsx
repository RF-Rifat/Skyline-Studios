import { useRef, useState } from "react";
import { motion } from "framer-motion";

const CardContainer = () => {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const ROTATION_RANGE = 50
  const HALF_ROTATION_RANGE = 50;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = (e.clientX + rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY + rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateY(rX);
    setRotateX(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };
  return (
    <>
      <div className="">
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          className="case-studies-single-item scroll-into-view-bottom w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
          data-aos="fade-down-right"
        >
          <a
            href="/case-study/cartize"
            className="case-studies-thumbnail-block w-full block relative overflow-hidden"
          >
            <img
              src="https://assets-global.website-files.com/643f7373d3f6653157617339/654b53eb6c1dc3dc8100ec13_Cartiz.webp"
              alt="fitlab project by musemind"
              className="case-studies-thumbnail-image w-full"
            />
            <div className="case-studies-quick-block absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
              <div className="case-studies-quick flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5H12.5V17.5H11.5V12.5H6.5V11.5H11.5V6.5H12.5V11.5H17.5V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="case-studies-quick bg-white flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center text-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5H12.5V17.5H11.5V12.5H6.5V11.5H11.5V6.5H12.5V11.5H17.5V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="case-studies-content mt-4">
            <a
              href="/case-study/cartize"
              className="case-studies-title-block w-full block"
            >
              <div className="case-studies-title text-white">
                Cartiziee - On Demand Food Delivery
              </div>
            </a>
            <div className="case-studies-category-block mt-2">
              <div className="case-studies-category text-gray-600">
                Mobile App • UI/UX
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          className="case-studies-single-item scroll-into-view-bottom w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
          data-aos="fade-down-right"
        >
          <a
            href="/case-study/cartize"
            className="case-studies-thumbnail-block w-full block relative overflow-hidden"
          >
            <img
              src="https://assets-global.website-files.com/643f7373d3f6653157617339/654b53eb6c1dc3dc8100ec13_Cartiz.webp"
              alt="fitlab project by musemind"
              className="case-studies-thumbnail-image w-full"
            />
            <div className="case-studies-quick-block absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
              <div className="case-studies-quick flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5H12.5V17.5H11.5V12.5H6.5V11.5H11.5V6.5H12.5V11.5H17.5V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="case-studies-quick bg-white flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center text-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5H12.5V17.5H11.5V12.5H6.5V11.5H11.5V6.5H12.5V11.5H17.5V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="case-studies-content mt-4">
            <a
              href="/case-study/cartize"
              className="case-studies-title-block w-full block"
            >
              <div className="case-studies-title text-white">
                Cartiziee - On Demand Food Delivery
              </div>
            </a>
            <div className="case-studies-category-block mt-2">
              <div className="case-studies-category text-gray-600">
                Mobile App • UI/UX
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX,
            rotateY,
          }}
          className="case-studies-single-item scroll-into-view-bottom w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
          data-aos="fade-down-right"
        >
          <a
            href="/case-study/cartize"
            className="case-studies-thumbnail-block w-full block relative overflow-hidden"
          >
            <img
              src="https://assets-global.website-files.com/643f7373d3f6653157617339/654b53eb6c1dc3dc8100ec13_Cartiz.webp"
              alt="fitlab project by musemind"
              className="case-studies-thumbnail-image w-full"
            />
            <div className="case-studies-quick-block absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
              <div className="case-studies-quick flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center text-white">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5H12.5V17.5H11.5V12.5H6.5V11.5H11.5V6.5H12.5V11.5H17.5V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="case-studies-quick bg-white flex items-center justify-center">
                <div className="w-10 h-10 flex items-center justify-center text-black">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5H12.5V17.5H11.5V12.5H6.5V11.5H11.5V6.5H12.5V11.5H17.5V12.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <div className="case-studies-content mt-4">
            <a
              href="/case-study/cartize"
              className="case-studies-title-block w-full block"
            >
              <div className="case-studies-title text-white">
                Cartiziee - On Demand Food Delivery
              </div>
            </a>
            <div className="case-studies-category-block mt-2">
              <div className="case-studies-category text-gray-600">
                Mobile App • UI/UX
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CardContainer;
