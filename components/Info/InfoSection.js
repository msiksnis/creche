import "styled-components/macro";
import { useState } from "react";
import { AccordionToggle } from "./AccordionToggle";
import Link from "next/link";
import { PrimaryButton } from "../StyledTags";

export default function InfoSection({ data }) {
  const [isOpen, setOpen] = useState(true);
  const [effect, setEffect] = useState(false);

  const toggleAccordion = () => {
    setOpen(!isOpen);
    setEffect(true);
  };

  return (
    <>
      <div className="font-poppins border-b pt-6 pb-6 md:w-72 lg:border-0 xl:w-60">
        <div className="flex w-full flex-col">
          <div
            className="flex cursor-pointer justify-between"
            onClick={toggleAccordion}
            onAnimationEnd={() => setEffect(false)}
          >
            <div className="text-xl font-medium uppercase tracking-wide text-[#7BC140]">
              {data.title}
            </div>
            <AccordionToggle
              toggle={toggleAccordion}
              isOpen={isOpen}
              effect={effect}
            />
          </div>
          <div className="pt-4">
            {isOpen ? (
              <div className="flex h-auto flex-col justify-between xl:h-80">
                <p className="pb-10 font-light leading-6 tracking-wide text-gray-700">
                  {data.text}
                </p>
                <PrimaryButton className="w-40 px-4 py-2 text-xs">
                  <Link href={data.url}>Read More</Link>
                </PrimaryButton>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
