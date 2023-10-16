import React from "react";
import logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="w-screen px-10 py-5 ">
        {/* main */}
        <div className="flex flex-row justify-between">
          <div className="flex items-center pt-2">
            <div>
              <Image
                className="rounded-3xl"
                src={logo}
                alt="logo"
                height={50}
                width={50}
              />
            </div>
            <div className="px-3 py-3 font-bold">
              <h3 className="text-colorB">Birthday-Buddy</h3>
            </div>
          </div>

          {/* ---------------------------- */}

          <div className="py-2 flex gap-x-5 items-center text-colorT">
            <Link className="flex items-center gap-2" href="#">
              Features <BsChevronDown />
            </Link>

            <Link href="#" className="text-yellow-600">
              Premium{" "}
            </Link>
            <Link href="#">
              Custom Bot{" "}
              <span className="bg-colorB text-white text-sm rounded-md items-center content-center cursor-pointer px-2 py-1">
                new
              </span>{" "}
            </Link>
            <Link href="#">Support Server</Link>
            <span className="bg-colorB text-white font-bold text-sm rounded-xl items-center content-center cursor-pointer px-5 py-3">
              Login
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
