import React from "react";
import Display from "../components/Display";

import certificate from "./../assets/img/certificate.svg";
import selfie from "./../assets/img/selfie.svg";
import prayingHand from "./../assets/img/praying-hand.svg";
import Card from "../components/Card";
import pattern3 from "../assets/img/pattern-left-bottom.png";
import pattern4 from "../assets/img/pattern-right-top.png";

const Fasilitas = () => {
  return (
    <section
      id="fasilitas"
      className="h-[88vh] scroll-mt-24 bg-mekah bg-cover bg-no-repeat bg-bottom relative flex flex-col flex-grow-0 items-center justify-center px-32"
    >
      <div className="absolute z-[1] inset-0 bg-black-custom opacity-70"></div>

      <img src={pattern4} alt="" className="absolute top-0 right-0 z-10 w-44" />
      <img
        src={pattern3}
        alt=""
        className="absolute bottom-0 left-0 z-10 w-32"
      />
      <div className="relative z-10 flex flex-col items-center">
        <Display className="mb-8 -mt-8 text-white-custom">Fasilitas</Display>

        <div className="flex gap-8">
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
