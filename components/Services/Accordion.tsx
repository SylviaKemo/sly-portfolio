"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";
import AccordionItem from "./AccordionItem";

/** One row open at a time; clicking the open row closes it. */
export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="border-t border-line">
      {services.map((service, index) => (
        <Reveal key={service.title}>
          <AccordionItem
            service={service}
            number={index + 1}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        </Reveal>
      ))}
    </div>
  );
}
