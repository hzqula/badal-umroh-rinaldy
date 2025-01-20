import React from "react";
import { InstagramIcon, TiktokIcon, WhatsappIcon } from "hugeicons-react";

const Header = () => {
  return (
    <header className="fixed z-50 flex items-center justify-center w-full h-24 bg-black-custom">
      <nav className="flex items-center justify-between w-1/2">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a
              href="#sekilas"
              className="text-sm font-medium tracking-tight text-base-yellow font-body"
            >
              Sekilas
            </a>
          </li>
          <li>
            <a
              href="#fasilitas"
              className="text-sm font-medium tracking-tighter text-base-yellow font-body"
            >
              Fasilitas
            </a>
          </li>
          <li>
            <a
              href="#pelaksana"
              className="text-sm font-medium tracking-tight text-base-yellow font-body"
            >
              Pelaksana
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-4">
          <a href="https://www.instagram.com/riinaaldy/" target="_blank">
            <InstagramIcon className="text-base-yellow" />
          </a>
          <a
            href="https://wa.me/+6285243287678?text=Hello%20World."
            target="_blank"
          >
            <WhatsappIcon className="text-base-yellow" />
          </a>
          <a href="">
            <TiktokIcon className="text-base-yellow" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
