/* eslint-disable react/prop-types */
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Button from "../../shared/Button/Button";

export function ServiceAccordion() {
  const [open, setOpen] = React.useState(0);

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
  ];

  return (
    <div className="max-w-screen-2xl mx-auto">
      {accData.map((item, idx) => (
        <Accordion
          key={idx}
          open={open === idx + 1}
          className="py-6 border-b-2"
          icon={
            <img
              src="https://assets-global.website-files.com/643f7373d3f6653157617339/65b8f91a1c17b21ef98c4a4a_branding.webp"
              loading="lazy"
              alt=""
              className={`scale-50 ${
                open === idx + 1 && "scale-105 skew-x-3 -rotate-12 duration-300"
              }`}
            />
          }
        >
          <AccordionHeader
            onClick={() => handleOpen(idx + 1)}
            onMouseEnter={() => handleHover(idx + 1)}
            onMouseLeave={() => handleHover(0)}
            color="white"
            className={`text-3xl border-none py-6 ${
              open === idx + 1 ? "text-white hover:!text-white" : ""
            }`}
          >
            <div className="text-5xl">
              <span className="text-yellow-400 text-3xl pr-28">{idx + 1}</span>{" "}
              {item?.title}
            </div>
          </AccordionHeader>
          <AccordionBody
            className="text-xl max-w-2xl ml-28"
            onClick={() => handleOpen(idx + 1)}
            onMouseEnter={() => handleHover(idx + 1)}
            onMouseLeave={() => handleHover(0)}
          >
            Exceptional UX isn&apos;t just design; it&apos;s a journey that
            builds trust, forges loyalty, and makes your brand unforgettable and
            this is our commitment to you from our UX design agency.
            <br />
            <Button
              text={"Contact Us"}
              color={"bg-[#FFFF00]"}
              fontClr={"text-[#000000]"}
            />
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}
