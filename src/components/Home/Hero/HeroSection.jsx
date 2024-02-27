import Button from "../../shared/Button/Button";

const HeroSection = () => {
  return (
    <>
      <div className="bg-heroBg font-[sans-serif] relative h-[90svh] overflow-hidden xl:pt-20">
        <div className="flex max-w-[1440px] mx-auto">
          <div className="mx-auto py-16 px-4 lg:w-8/12">
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="tracking-tight leading-snug font-semibold text-5xl lg:text-8xl">
                Digital Product{" "}
                <span className="hidden lg:inline-block">—</span>
                <span className="lg:hidden">&</span>
                <br className="xl:hidden" />
                <span className="text-white"> UX</span>
              </h1>
              <p className="text-white text-5xl xl:text-8xl mb-4">
                Design Agency
              </p>
              <p
                className="text-2xl"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                Musemind is a global UX Design and Web Design Agency. Helping
                Brands redefine experiences and empower business growth.
              </p>
              <div className="mt-4 xl:mt-12 flex lg:justify-start justify-center">
                <Button
                  text={"Contact Us"}
                  color={"bg-[#FFFF00]"}
                  fontClr={"text-[#000000]"}
                  pad={"p-3"}
                />
              </div>
            </div>
          </div>
          <div className="lg:inset-y-0 lg:right-0 lg:w-4/12">
            {/* <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://readymadeui.com/hotel-img.webp"
              alt="Delicious Food"
            /> */}
          </div>
        </div>
        <div className="absolute top-0 right-0 h-2/6 w-3/6 inline-block">
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            playsInline
            // className="inline-block "
          >
            <source
              src="https://uiart.io/video/banner-animation.mov"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
