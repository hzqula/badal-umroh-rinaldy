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
      icon: <GraduateMaleIcon className="w-6 h-6" />,
      label: "Pendidikan",
      value: "Tarim, Yaman",
    },
    {
      icon: <BookOpen01Icon className="w-6 h-6" />,
      label: "Jurusan",
      value: "Ilmu Fiqh",
    },
    {
      icon: <UserAccountIcon className="w-6 h-6" />,
      label: "Followers",
      value: "3K+",
    },
  ];

  return (
    <section
      id="pelaksana"
      className="h-[88vh] relative flex flex-col items-center justify-center scroll-mt-24 bg-white-custom"
    >
      <img src={pattern1} alt="" className="absolute top-0 left-0 w-32" />
      <img src={pattern2} alt="" className="absolute bottom-0 right-0 w-44" />

      <Display>Pelaksana</Display>
      <div className="flex items-center justify-center">
        <div className="relative flex justify-center w-2/5 p-8">
          {/* Card Container */}
          <div
            className="relative z-20 w-3/5 p-6 transition-all duration-500 transform bg-white shadow-xl rounded-2xl hover:scale-105"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Blurs */}
            <div className="absolute w-32 h-32 rounded-full -left-6 -top-6 bg-base-yellow blur-xl"></div>
            <div className="absolute w-32 h-32 rounded-full -right-6 -bottom-6 bg-black-custom blur-xl"></div>

            {/* Image Container */}
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
        <div className="w-1/2">
          <SubTitle className="-mb-1 text-left text-base-yellow">
            Mahasiswa Tarim, Yaman
          </SubTitle>
          <Title>Akh. Rinaldy</Title>
          <div className="grid grid-cols-1 gap-4 my-4 md:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 transition-shadow bg-white border shadow-sm border-black-custom rounded-xl hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-base-yellow text-black-custom">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="-mb-2 text-sm text-black-custom">
                      {stat.label}
                    </p>
                    <p className="font-black">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Paragraph>
            Mahasiswa dari Indonesia yang menuntut ilmu fiqh di Yaman. Berusia
            20 Tahun. Aktif membagikan ilmu agama di Tiktok dan Instagram.
          </Paragraph>
          <div className="flex gap-4 my-4">
            <a
              href="https://www.instagram.com/riinaaldy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 rounded-lg group bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg"
            >
              <InstagramIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 text-white transition-all duration-300 bg-black rounded-lg group hover:shadow-lg"
            >
              <TiktokIcon className="w-6 h-6 transition-transform group-hover:scale-110" />
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pelaksana;
