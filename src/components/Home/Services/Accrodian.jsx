/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Button from "../../shared/Button/Button";

export function ServiceAccordion() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(value);
  const handleHover = (value) => {
    setOpen(value);
  };
  const accData = [
    {
      title: "UX Design",
      desc: "Exceptional UX isn&apos;t just design; it&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
    {
      title: "UX Design",
      desc: "Exceptional UX isn&apos;t just design; it&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
    {
      title: "UX Design",
      desc: "Exceptional UX isn&apos;t just design; it&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
    {
      title: "UX Design",
      desc: "Exceptional UX isn&apos;t just design; it&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
    {
      title: "UX Design",
      desc: "Exceptional UX isn&apos;t just design; it&apos;s a journey that builds trust, forges loyalty, and makes your brand unforgettable and this is our commitment to you from our UX design agency.",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto">
      {accData.map((item, idx) => (
        <Accordion
          key={idx}
          onClick={() => handleOpen(idx + 1)}
          onMouseEnter={() => handleHover(idx + 1)}
          onMouseLeave={() => handleHover(0)}
          style={{
            borderBottom: ".5px solid #bdbfc14c",
          }}
          open={open === idx + 1}
          className="relative py-6"
          // icon={
          //   <img
          //     src="https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp"
          //     loading="lazy"
          //     alt=""
          //     className={`scale-50 ${
          //       open === idx + 1 &&
          //       "scale-75 skew-x-3 -rotate-12 duration-300 text-[#bdbfc14c]"
          //     }`}
          //   />
          // }
        >
          <AccordionHeader
            onClick={() => handleOpen(idx + 1)}
            onMouseEnter={() => handleHover(idx + 1)}
            onMouseLeave={() => handleHover(0)}
            // color="white"
            className={`text-3xl border-none py-6 mb-0 ${
              open === idx + 1
                ? "text-white hover:!text-white"
                : "text-[#767677]"
            }`}
          >
            <div className="text-4xl md:text-6xl">
              <span className="text-yellow-400 text-2xl font-light pr-10 lg:pr-16 hover:text-white relative md:bottom-4">
                0{idx + 1}
              </span>{" "}
              {item?.title}
            </div>
          </AccordionHeader>
          <AccordionBody
            className="text-base md:text-lg max-w-2xl ml-24 md:ml-28 lg:ml-32"
            // onClick={() => handleOpen(idx + 1)}
            onMouseEnter={() => handleHover(idx + 1)}
            onMouseLeave={() => handleHover(0)}
          >
            <div className="space-y-4">
              Exceptional UX isn&apos;t just design; it&apos;s a journey that
              builds trust, forges loyalty, and makes your brand unforgettable
              and this is our commitment to you from our UX design agency.
              <br />
              <Button
                className="mt-10"
                text={"Contact Us"}
                color={"bg-[#FFFF00]"}
                fontClr={"text-[#000000]"}
              />
            </div>
          </AccordionBody>

          <img
            onClick={() => handleOpen(idx + 1)}
            onMouseEnter={() => handleHover(idx + 1)}
            onMouseLeave={() => handleHover(0)}
            src="https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp"
            loading="lazy"
            alt=""
            className={`hidden lg:block scale-50 absolute -top-1 right-10 ${
              open === idx + 1 &&
              "scale-75 skew-x-3 -rotate-12 transition-all duration-500 top-20 text-[#bdbfc14c]"
            }`}
          />
        </Accordion>
      ))}
    </div>
  );
}
