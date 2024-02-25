const LatestProject = () => {
  return (
    <>
      <div className="bg-heroBg px-4 py-10 font-[sans-serif]">
        <div className="max-w-7xl max-md:max-w-lg mx-auto">
          <h2 className="text-4xl text-center font-extrabold text-[#333]">
            Latest Design trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white cursor-pointer rounded overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://assets-global.website-files.com/644911ba57947a8c25ad6be7/65cb0321f09e90d2bb7b15f5_art-of-visual-branding.webp"
                  alt="New Project"
                  className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                />
                <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">
                  June 10, 2024
                </div>
              </div>
              <div className="p-6 group-hover:bg-white bg-blue-gray-50">
                <h3 className="text-xl font-extrabold h-28 text-[#333]">
                  The Art of Visual Branding: How to Leverage Brand Elements to
                  Establish Your
                </h3>
                <button
                  type="button"
                  //   className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
                >
                  Branding
                </button>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://assets-global.website-files.com/644911ba57947a8c25ad6be7/6530abc1205caab50f24dafb_give-your-design-agency-freedom-to-innovate.jpg"
                  alt="Blog Post 2"
                  className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                />
                <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">
                  Feb 20, 2024
                </div>
              </div>
              <div className="p-6 group-hover:bg-white bg-blue-gray-50">
                <h3 className="text-xl font-extrabold h-28 text-[#333]">
                  Why Should Give Your Design Agency The Freedom To Innovate?
                </h3>
                <button
                  type="button"
                  //   className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
                >
                  Business
                </button>
              </div>
            </div>
            <div className="bg-white cursor-pointer rounded overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src="https://assets-global.website-files.com/644911ba57947a8c25ad6be7/6524ce81e42b4fae929340b4_musmeind-rebranding.png"
                  alt="Blog Post 3"
                  className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
                />
                <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">
                  Jan 16, 2024
                </div>
              </div>
              <div className="p-6 group-hover:bg-white bg-blue-gray-50">
                <h3 className="text-xl font-extrabold h-28 text-[#333]">
                  Rebranding with Purpose: Embracing Growth and Transformation
                </h3>
                <button
                  type="button"
                  //   className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600"
                >
                  Branding
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProject;
