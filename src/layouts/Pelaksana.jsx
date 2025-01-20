import React, { useState } from "react";
import Display from "../components/Display";
import pelaksana from "../assets/img/rinaldy.png";
import awan from "../assets/img/awan.png";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import pattern1 from "./../assets/img/pattern-left-top-b.png";
import pattern2 from "./../assets/img/pattern-right-bottom-b.png";
import {
  BookOpen01Icon,
  GraduateMaleIcon,
  InstagramIcon,
  TiktokIcon,
  UserAccountIcon,
} from "hugeicons-react";

const Pelaksana = () => {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    {
      icon: <GraduateMaleIcon className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Pendidikan",
      value: "Tarim, Yaman",
    },
    {
      icon: <BookOpen01Icon className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Jurusan",
      value: "Ilmu Fiqh",
    },
    {
      icon: <UserAccountIcon className="w-5 h-5 md:w-6 md:h-6" />,
      label: "Followers",
      value: "3K+",
    },
  ];

  return (
    <section
      id="pelaksana"
      className="min-h-[88vh] relative flex flex-col items-center justify-center scroll-mt-16 md:scroll-mt-24 bg-white-custom px-4 sm:px-6 md:px-8 lg:px-12 py-12"
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

      <Display className="mb-8 md:mb-12">Pelaksana</Display>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
        <div className="w-full p-4 sm:w-4/5 md:w-3/4 lg:w-2/5 sm:p-6 md:p-8">
          <div
            className="relative z-20 w-full p-4 mx-auto transition-all duration-500 transform bg-white shadow-xl sm:w-4/5 md:w-3/4 sm:p-6 rounded-2xl hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute w-24 h-24 rounded-full sm:w-28 sm:h-28 md:w-32 md:h-32 -left-6 -top-6 bg-base-yellow blur-xl"></div>
            <div className="absolute w-24 h-24 rounded-full sm:w-28 sm:h-28 md:w-32 md:h-32 -right-6 -bottom-6 bg-black-custom blur-xl"></div>

            <div className="relative overflow-hidden rounded-xl">
              <img
                src={pelaksana}
                alt="Akh. Rinaldy"
                className="relative z-10 object-cover w-full h-full transition-transform duration-700 transform hover:scale-105"
              />
              <img
                src={awan}
                alt=""
                className={`absolute z-[20] w-[200%] -bottom-16 transition-all duration-700 ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        <div className="w-full px-4 lg:w-1/2 sm:px-6">
          <SubTitle className="-mb-1 text-center lg:text-left text-base-yellow">
            Mahasiswa Tarim, Yaman
          </SubTitle>
          <Title className="text-center lg:text-left">Akh. Rinaldy</Title>

          <div className="grid grid-cols-1 gap-3 my-4 sm:grid-cols-3 md:gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-3 transition-shadow bg-white border shadow-sm md:p-4 border-black-custom rounded-xl hover:shadow-md"
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="p-1.5 md:p-2 rounded-lg bg-base-yellow text-black-custom">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="-mb-1 text-xs md:-mb-2 md:text-sm text-black-custom">
                      {stat.label}
                    </p>
                    <p className="text-sm font-black md:text-base">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Paragraph className="text-center lg:text-left">
            Mahasiswa dari Indonesia yang menuntut ilmu fiqh di Yaman. Berusia
            20 Tahun. Aktif membagikan ilmu agama di Tiktok dan Instagram.
          </Paragraph>

          <div className="flex flex-col justify-center gap-3 my-4 sm:flex-row md:gap-4 lg:justify-start">
            <a
              href="https://www.instagram.com/riinaaldy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white transition-all duration-300 rounded-lg md:px-6 md:py-3 md:text-base group bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg"
            >
              <InstagramIcon className="w-5 h-5 transition-transform md:w-6 md:h-6 group-hover:scale-110" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white transition-all duration-300 bg-black rounded-lg md:px-6 md:py-3 md:text-base group hover:shadow-lg"
            >
              <TiktokIcon className="w-5 h-5 transition-transform md:w-6 md:h-6 group-hover:scale-110" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pelaksana;
