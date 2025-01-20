import React from "react";
import Display from "../components/Display";
import Card from "../components/Card";
import certificate from "./../assets/img/certificate.svg";
import selfie from "./../assets/img/selfie.svg";
import prayingHand from "./../assets/img/praying-hand.svg";
import pattern3 from "../assets/img/pattern-left-bottom.png";
import pattern4 from "../assets/img/pattern-right-top.png";

const Fasilitas = () => {
  return (
    <section
      id="fasilitas"
      className="min-h-[88vh] scroll-mt-16 md:scroll-mt-24 bg-mekah bg-cover bg-no-repeat bg-bottom relative flex flex-col flex-grow-0 items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32"
    >
      <div className="absolute z-[1] inset-0 bg-black-custom opacity-70"></div>

      <img
        src={pattern4}
        alt=""
        className="absolute top-0 right-0 z-10 w-24 sm:w-32 md:w-40 lg:w-44"
      />
      <img
        src={pattern3}
        alt=""
        className="absolute bottom-0 left-0 z-10 w-20 sm:w-24 md:w-28 lg:w-32"
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <Display className="mb-6 -mt-4 text-center md:mb-8 md:-mt-8 text-white-custom">
          Fasilitas
        </Display>

        <div className="flex flex-col justify-center w-full gap-4 sm:flex-row sm:gap-6 md:gap-8">
          <Card
            image={certificate}
            title="E-Sertifikat"
            paragraph="Sebagai bukti pelaksanaan umroh yang dikirim dalam bentuk softfile yang bisa
            dicetak."
          />
          <Card
            image={prayingHand}
            title="Request Do'a"
            paragraph="Pendaftar boleh request do'a ketika pelaksana berada di depan Ka'bah."
          />
          <Card
            image={selfie}
            title="Cuplikan Video"
            paragraph="Memperoleh video cuplikan pada saat badal umroh dengan kualitas HD."
          />
        </div>
      </div>
    </section>
  );
};

export default Fasilitas;
