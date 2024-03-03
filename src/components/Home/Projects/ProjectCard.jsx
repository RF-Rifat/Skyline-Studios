import Tilt from "react-parallax-tilt";
// import "./card.css";

const ProjectCard = () => {
  return (
    <>
      <div className="w-full p-[3cqw] mt-10" data-aos="zoom-in-right">
        <Tilt
          href=""
          className="w-full block relative overflow-hidden"
          perspective={2000}
        >
          <img
            src="https://assets-global.website-files.com/643f7373d3f6653157617339/654b53eb6c1dc3dc8100ec13_Cartiz.webp"
            alt="musemind"
            className="h-[55svh] lg:h-[80svh] w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black bg-opacity-50 hover:opacity-100">
            <div className="flex items-center justify-center">
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
            <div className="bg-white flex items-center justify-center rounded-full">
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
        </Tilt>
        <div className="mt-4">
          <a href="" className="case-studies-title-block w-full block">
            <div className="text-white text-2xl font-semibold">
              Cartiziee - On Demand Food Delivery
            </div>
          </a>
          <div className="case-studies-category-block mt-2">
            <div className="case-studies-category text-gray-600">
              Mobile App • UI/UX
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
