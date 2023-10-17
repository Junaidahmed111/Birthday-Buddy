import React from "react";
import logo from "@/public/logo.jpg";
import Image from "next/image";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  const textSize = "text-xs";
  const headingSize = "text-sm";
  return (
    <>
      <footer className="py-10 px-5 flex flex-col lg:flex-row justify-between gap-y-5">
        <div className=" flex flex-col gap-y-5">
          <div className="flex items-center">
            <div>
              <Image
                className="rounded-3xl"
                src={logo}
                alt="logo"
                height={40}
                width={40}
              />
            </div>
            <div className="px-3 py-3 font-bold">
              <h3 className="text-colorB">Birthday-Buddy</h3>
            </div>
          </div>

          <div>
            <p className="text-white md:font-sans">
              Birthday Buddy is a discard bot build to enhance your discord
              experience
            </p>
          </div>
          {/* icons div */}
          <div className=" flex flex-row gap-x-5">
            <BsTwitter color="#fff" />
            <BsGithub color="#fff" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full justify-between gap-y-5">
          <div className="flex items-center gap-x-[30%] w-full">
            <div className="text-white flex flex-col gap-y-5 ">
              <h2 className={`font-bold ${headingSize}`}>Features</h2>

              <Link href="#" className={textSize}>
                Social Notifications
              </Link>
              <Link href="#" className={textSize}>
                Music
              </Link>
              <Link href="#" className={textSize}>
                Timers
              </Link>
            </div>
            <div className="text-white flex flex-col gap-y-5">
              <h2 className={`font-bold ${headingSize}`}>Company</h2>
              <Link href="#" className={textSize}>
                Our Team
              </Link>
              <Link href="#" className={textSize}>
                {" "}
                Join Us
              </Link>
              <Link href="#" className={textSize}>
                About us
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-x-[36%] md:gap-x-[33%] w-full">
            <div className="text-white flex flex-col gap-y-5">
              <h2 className={`font-bold ${headingSize}`}>Support </h2>
              <Link href="#" className={textSize}>
                Premium
              </Link>
              <Link href="#" className={textSize}>
                Support Server
              </Link>
              <Link href="#" className={textSize}>
                Custom Bot
              </Link>
            </div>
            <div className="text-white flex flex-col gap-y-5">
              <h2 className={`font-bold ${headingSize}`}>Legal</h2>
              <Link href="#" className={textSize}>
                Privacy Policy
              </Link>
              <Link href="#" className={textSize}>
                Terms of Service
              </Link>
              <Link href="#" className={textSize}>
                DMCA
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-row gap-x-3 text-white items-center justify-center text-center text-sm py-5 border-t-gray-500 border-t-[1px]">
        <BiCopyright color="#fff" /> <p>2020-2023 Birthday-Buddy</p>
      </div>
    </>
  );
};

export default Footer;
