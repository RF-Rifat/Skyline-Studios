import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "../shared/Button/Button";
import Ticker from "./Ticker";
const Description = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          background: isInView ? "black" : "white",
          color: "white",
          transition: "all 1s",
        }}
      >
        <div
          className="max-w-5xl mx-auto px-4 space-y-6 pt-[7cqw]"
          style={{
            transform: isInView ? "" : "translateY(50px)",
            transition: "all 1s",
          }}
        >
          <h2 className="tracking-tight font-bold text-5xl lg:text-6xl xl:text-[4.25rem] leading-snug">
            Musemind Design Agency
            <span className="text-gray-500 ml-3">
              Igniting Excellence Through Dedication &amp; Innovation
            </span>
          </h2>
          <div className="text-xl xl:text-2xl text-gray-500 leading-relaxed space-y-6">
            <p>
              At Musemind, our journey is fired by passion—our core spark. The
              secret to our innovation and success? It&apos;s the fusion of
              relentless dedication, a heart that beats for design, and a drive
              to innovate!
            </p>
            <p className="color-gray-500 mb-65">
              Also, in our design agency we treasure integrity and transparency.
              Our commitment to ethical practices has been a driving force.
              Clients rely on us for clear communication, honest collaboration,
              and reliable results. This foundation of trust has been key to our
              journey, fostering relationships and fueling our enduring success.
            </p>
          </div>
          <div className="mt-4 xl:mt-12 flex justify-start ">
            <Button
              text={"Discover our works"}
              color={"bg-[#FFFF00]"}
              fontClr={"text-[#000000]"}
              pad={"p-3"}
            />
          </div>
        </div>
        <Ticker />
      </motion.div>
    </>
  );
};

export default Description;
