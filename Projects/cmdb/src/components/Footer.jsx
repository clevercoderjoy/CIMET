import React from "react";
import { SiHashnode } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#020c1b] py-12 text-white relative">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center">
          <ul className="flex flex-wrap justify-center gap-4 mb-5 text-sm md:gap-8 md:mb-7">
            <li className="cursor-pointer hover:text-pink-500 transition">Terms Of Use</li>
            <li className="cursor-pointer hover:text-pink-500 transition">Privacy-Policy</li>
            <li className="cursor-pointer hover:text-pink-500 transition">About</li>
            <li className="cursor-pointer hover:text-pink-500 transition">Blog</li>
            <li className="cursor-pointer hover:text-pink-500 transition">FAQ</li>
          </ul>
          <div className="text-center text-xs md:text-sm text-gray-400 max-w-xl mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>
          <div className="flex justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/clevercoderjoy"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/clevercoderjoy"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://clevercoderjoy.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <SiHashnode size={24} />
            </a>
            <a
              href="https://wa.me/+919455869211"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://x.com/clevercoderjoy"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <AiOutlineTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/clevercoderjoy"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://clevercoderjoy.bio.link"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:text-pink-500 transition shadow-lg"
            >
              <FaUser size={22} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
