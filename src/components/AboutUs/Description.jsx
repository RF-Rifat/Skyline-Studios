import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
        <div className="max-w-4xl mx-auto">
          <h2 className="tracking-tight leading-snug font-bold text-6xl lg:text-7xl xl:text-8xl">
            Musemind Design Agency{" "}
            <span className="section-title-extra-color">
              Igniting Excellence Through Dedication &amp; Innovation
            </span>
          </h2>
          <div className="section-cotent-wrap">
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
        </div>
      </motion.div>
    </>
  );
};

export default Description;
