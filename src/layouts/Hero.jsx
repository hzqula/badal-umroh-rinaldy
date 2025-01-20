import { ArrowDownDoubleIcon } from "hugeicons-react";
import React from "react";
import { motion } from "framer-motion";
import SubTitle from "../components/SubTitle";
import Display from "../components/Display";

const Hero = () => {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center min-h-screen gap-4 px-4 bg-repeat bg-cover md:gap-6 bg-pattern sm:px-6 md:px-8">
        <div className="absolute bottom-0 z-10 w-full h-48 sm:h-56 md:h-64 bg-gradient-to-b from-transparent to-white-custom"></div>

        <div className="flex flex-col items-center justify-center max-w-sm text-center sm:max-w-md md:max-w-lg lg:max-w-xl">
          <Display className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:mb-4">
            Keberkahan Umroh Badal
          </Display>
          <SubTitle className="px-4 text-sm sm:text-base md:text-lg sm:px-6">
            Memberikan kesempatan bagi umat Muslim untuk dapat saling membantu
            dalam melaksanakan ibadah umroh
          </SubTitle>
        </div>

        <a
          href="#sekilas"
          className="flex items-center gap-2 py-1.5 sm:py-2 px-4 sm:pl-5 sm:pr-4 text-sm sm:text-base font-bold tracking-tight border-2 rounded-full bg-base-yellow border-black-custom hover:opacity-90 transition-opacity"
        >
          <span>Gulir ke bawah</span>
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowDownDoubleIcon
              className="w-4 h-4 sm:w-5 sm:h-5"
              strokeWidth={2}
            />
          </motion.div>
        </a>
      </main>
    </>
  );
};

export default Hero;
