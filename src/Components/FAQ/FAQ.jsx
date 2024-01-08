import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Faq } from "../Lottie/Lottie";

export function FAQ() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div
      className="flex flex-col lg:flex-row gap-12 my-16 w-3/4 lg:w-full mx-auto"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className="lg:w-1/2">
        <Faq></Faq>
      </div>

      <div className="lg:w-1/2">
        <h1 className="text-2xl lg:text-3xl mb-5 font-bold">
          Frequently Asked
        </h1>
        <Accordion open={alwaysOpen}>
          <AccordionHeader
            onClick={handleAlwaysOpen}
            className="text-base text-inherit"
          >
            How to register as seller?
          </AccordionHeader>
          <AccordionBody className="text-xs text-inherit opacity-90">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="text-base text-inherit"
          >
            Is any buyer can be seller?
          </AccordionHeader>
          <AccordionBody className="text-xs text-inherit opacity-90">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="text-inherit text-base"
          >
            How can I sell my services here?
          </AccordionHeader>
          <AccordionBody className="text-xs text-inherit opacity-90">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
