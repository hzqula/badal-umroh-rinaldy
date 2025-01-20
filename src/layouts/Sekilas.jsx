import React from "react";
import { motion } from "framer-motion";
import pattern1 from "./../assets/img/pattern-left-top.png";
import pattern2 from "./../assets/img/pattern-right-bottom.png";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import hero1 from "../assets/img/hero-1.jpg";
import hero2 from "../assets/img/hero-2.jpg";
import hero3 from "../assets/img/hero-3.jpg";
import TextArab from "../components/TextArab";
import Display from "../components/Display";

const Sekilas = () => {
  const ngambang = (duration) => ({
    y: [0, -12, 0],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  });

  return (
    <section
      id="sekilas"
      className="min-h-[88vh] scroll-mt-16 md:scroll-mt-24 bg-base-yellow relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-32 py-12 md:py-16"
    >
      <img
        src={pattern1}
        alt=""
        className="absolute top-0 left-0 w-24 sm:w-28 md:w-32"
      />
      <img
        src={pattern2}
        alt=""
        className="absolute bottom-0 right-0 w-32 sm:w-36 md:w-44"
      />

      <Display className="mb-8 -mt-8 text-center md:mb-12 lg:mb-16 md:-mt-16">
        Sekilas
      </Display>

      <div className="flex flex-col items-center justify-center gap-12 lg:flex-row lg:gap-8">
        <div className="flex flex-col order-2 w-full gap-4 lg:w-1/2 lg:order-1">
          <div>
            <Title className="mb-2 text-center lg:text-left">
              Dalil Badal Umroh?
            </Title>
            <TextArab className="text-sm text-center md:text-base lg:text-lg lg:text-right">
              عَنِ ابْنِ عَبَّاسٍ عَنِ الْفَضْلِ أَنَّ امْرَأَةً مِنْ خَثْعَمَ
              قَالَتْ يَا رَسُولَ اللَّهِ إِنَّ أَبِى شَيْخٌ كَبِيرٌ عَلَيْهِ
              فَرِيضَةُ اللَّهِ فِى الْحَجِّ وَهُوَ لاَ يَسْتَطِيعُ أَنْ
              يَسْتَوِىَ عَلَى ظَهْرِ بَعِيرِهِ. فَقَالَ النَّبِىُّ -صلى الله
              عليه وسلم- « فَحُجِّى عَنْهُ
            </TextArab>
            <Paragraph className="mt-4 italic text-justify">
              "Hadist riwayat Ibnu Abbas dari al-Fadl: "Seorang perempuan dari
              kabilah Khats'am bertanya kepada Rasulullah: "Wahai Rasulullah,
              ayahku telah wajib haji tapi dia sudah tua renta dan tidak mampu
              lagi duduk di atas kendaraan?". Jawab Rasulullah: "Kalau begitu
              lakukanlah haji untuk dia!" (H.R. Bukhari, Muslim)"
            </Paragraph>
          </div>
          <div>
            <Title className="mb-2 text-center lg:text-left">
              Apa itu Badal Umroh?
            </Title>
            <Paragraph className="text-center lg:text-left">
              Adalah sebuah istilah dalam menggantikan orang lain untuk
              melaksanakan ibadah umroh karena orang yang dibadalkan tersebut
              tidak dapat melakukan ibadah umroh.
            </Paragraph>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] order-1 lg:order-2">
          <motion.div
            transition={{ type: "spring", delay: 0.3 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={ngambang(3)}
            className="absolute z-10 top-1/4 right-1/4"
          >
            <img
              src={hero2}
              alt=""
              className="w-40 px-3 pt-3 pb-8 border-2 sm:w-48 md:w-56 sm:px-4 sm:pt-4 sm:pb-12 bg-white-custom border-black-custom"
            />
          </motion.div>
          <motion.div
            transition={{ type: "spring", delay: 0.5 }}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={ngambang(2)}
            className="absolute top-0 right-[10%]"
          >
            <img
              src={hero1}
              alt=""
              className="w-40 px-3 pt-3 pb-8 border-2 sm:w-48 md:w-56 sm:px-4 sm:pt-4 sm:pb-12 rotate-12 bg-white-custom border-black-custom"
            />
          </motion.div>
          <motion.div
            transition={{ type: "spring", delay: 0.7 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            animate={ngambang(4)}
            className="absolute top-0 right-[40%]"
          >
            <img
              src={hero3}
              alt=""
              className="w-40 px-3 pt-3 pb-8 border-2 sm:w-48 md:w-56 sm:px-4 sm:pt-4 sm:pb-12 -rotate-12 bg-white-custom border-black-custom"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sekilas;
