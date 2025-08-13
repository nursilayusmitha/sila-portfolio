import React from "react";
import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import SVGIcon from "./ui/SVGIcon";
import heart from "../icons/heart.svg";

const About = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 [@media(min-width:1000px)]:px-10 [@media(min-width:1300px)]:px-20">
      <div className="w-full relative flex items-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 font-pixelify text-[#4287f5] dark:text-white"
        >
          ABOUT ME!!
        </h1>
        <SVGIcon
  icon={heart}
  className="
    w-12 h-12         
    sm:w-12 sm:h-12  
    md:w-16 md:h-16 
    lg:w-35 lg:h-35 
    ml-3 sm:ml-5 md:ml-7
    -mt-3 sm:-mt-6 md:-mt-8 lg:-mt-8
  "
/>

      </div>

      <BentoGrid className="w-full mt-6 lg:mt-10">
        {gridItems.map((item, i) => (
          <BentoGridItem key={i} {...item} />
        ))}
      </BentoGrid>

      <h3
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 lg:mt-20 font-vt323 text-[#4287f5] dark:text-white"
        id="certificates"
      >
        My Certificates !!
      </h3>
    </section>
  );
};

export default About;
