import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Lottie from "lottie-react";
import create from "../../assets/car1.json";

const Create = () => {
  return <Lottie style={{ margin: "auto" }} animationData={create} />;
};
export function FAQ() {
  const [open, setOpen] = React.useState(0);
  const [alwaysOpen, setAlwaysOpen] = React.useState(true);

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col lg:flex-row gap-12 my-16 lg:my-56 w-3/4 lg:w-full mx-auto">
      <div className="lg:w-1/2">
        <Create></Create>
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
            What is Material Tailwind?
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
            How to use Material Tailwind?
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
            What can I do with Material Tailwind?
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
