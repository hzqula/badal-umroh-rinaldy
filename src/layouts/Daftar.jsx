import React from "react";
import Display from "../components/Display";
import SubTitle from "../components/SubTitle";
import Paragraph from "../components/Paragraph";
import { WhatsappIcon } from "hugeicons-react";

const Daftar = () => {
  const nomor = "+6285243287678";
  const pesan =
    "Assalamu'alaikum akhy Rinaldy, ana ingin konsultasi mengenai badal umroh yang antum tawarkan";

  return (
    <section
      id="pelaksana"
      className="min-h-[88vh] relative flex flex-col items-center justify-center scroll-mt-16 md:scroll-mt-24 bg-black-custom px-4 md:px-6 py-8 md:py-12"
    >
      <Display className="-mt-6 text-center md:-mt-10 text-base-yellow">
        Ayo Daftar Sekarang!
      </Display>
      <SubTitle className="max-w-md mx-auto mb-6 text-center md:mb-8 text-base-yellow md:max-w-lg">
        Dengan klik tombol di bawah ini, Anda akan diarahkan ke nomor WhatsApp
        pelaksana
      </SubTitle>
      <a
        href={`https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`}
        target="_blank"
        className="flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-tight transition-opacity border-2 rounded-full md:pl-5 md:pr-4 bg-base-yellow border-black-custom hover:opacity-90 md:text-base"
      >
        Daftar Sekarang!
        <WhatsappIcon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
      </a>
      <footer className="absolute self-center text-sm bottom-6 md:bottom-10 text-base-yellow md:text-base">
        Rinaldy &#169; 2025
      </footer>
    </section>
  );
};

export default Daftar;
