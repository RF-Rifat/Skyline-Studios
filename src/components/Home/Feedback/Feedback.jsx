import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Feedback = () => {
  return (
    <div className="bg-neutral-800">
      {/* <div className="flex h-48 items-center justify-center"></div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center"></div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden max-w-[1440px] mx-auto">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px]  bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Feedback;

const cards = [
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp",
    title: "Title 7",
    id: 7,
  },
];
