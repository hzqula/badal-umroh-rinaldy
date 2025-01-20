import { ArrowDownDoubleIcon } from "hugeicons-react";
import React from "react";
import { motion } from "framer-motion";
import SubTitle from "../components/SubTitle";
import Display from "../components/Display";

const Hero = () => {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center h-screen gap-6 bg-repeat bg-cover bg-pattern">
        <div className="absolute bottom-0 z-10 w-full h-64 bg-gradient-to-b from-transparent to-white-custom"></div>
        <div className="flex flex-col items-center justify-center ">
          <Display>Keberkahan Umroh Badal</Display>
          <SubTitle>
            Memberikan kesempatan bagi umat Muslim untuk dapat saling membantu
            dalam melaksanakan ibadah umroh
          </SubTitle>
        </div>
        <a
          href="#sekilas"
          className="flex items-center gap-2 py-2 pl-5 pr-4 font-bold tracking-tight border-2 rounded-full bg-base-yellow border-black-custom"
        >
          Gulir ke bawah
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <ArrowDownDoubleIcon className="w-5 h-5" strokeWidth={2} />
          </motion.div>
        </a>
      </main>
    </>
  );
};

export default Hero;
