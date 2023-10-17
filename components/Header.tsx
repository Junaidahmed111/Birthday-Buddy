"use client";
import React, { useState } from "react";
import logo from "@/public/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="px-4 lg:px-8 flex items-center justify-between py-6 top-0 w-full bg-white">
      <div className="flex lg:flex-[0.2] items-center order-first">
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
      </div>


      <div className="hidden lg:flex flex-[0.6] items-center justify-center gap-x-3 lg:text-lg ">
        <Link href="#" className="text-lg no-underline">
          <span>Features</span>
        </Link>
        <Link href="#" className="text-lg no-underline">
          <span>Premium</span>
        </Link>
        <Link href="#" className="text-lg no-underline">
          <span>Custom Bot</span>
        </Link>
        <Link href="#" className="text-lg no-underline">
          <span>Support Server</span>
        </Link>
      </div>




      <div className="hidden lg:flex flex-[0.2] items-center justify-end gap-x-3 lg:order-2 lg:text-lg ">
        <span className="bg-colorB text-white font-bold text-sm rounded-xl items-center content-center cursor-pointer px-5 py-3">
          Login
        </span>
      </div>



      <div className="flex order-3 lg:hidden md:order-non">
        <button className="2xl:hidden z-20" onClick={handleMenuToggle}>
          {menuOpen ? (
            <AiOutlineClose size="30px" />
          ) : (
            <RxHamburgerMenu size="30px" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute text-right inset-0 w-full top-24 h-fit flex flex-col p-4 space-y-1 bg-slate-500">
          {/* <div>
            <Link href="/">
              <Image
                className="w-[60px] 2xl:w-[70px]"
                src={logo}
                width={100}
                height={100}
                alt="Logo"
              />
            </Link>
          </div> */}
          <div className="flex justify-center flex-col gap-y-5 py-5">
            <Link href="#" onClick={handleMenuToggle} className="no-underline">
              <span>Features</span>
            </Link>
            <Link href="#" onClick={handleMenuToggle} className="no-underline">
              <span>Premium</span>
            </Link>
            <Link href="#" onClick={handleMenuToggle} className="no-underline">
              <span>Custom Bot</span>
            </Link>
            <Link href="#" onClick={handleMenuToggle} className="no-underline">
              <span>Support Server</span>
            </Link>
          </div>
          <hr />
          <div className="flex justify-stretch flex-col gap-y-5 py-4 items-stretch text-center rounded-xl">
          <span className="bg-colorB text-white font-bold text-sm rounded-xl items-center content-center cursor-pointer px-5 py-3">
          Login
        </span>
          </div>
        </div>
      )}
          
    </nav>
  );

  // return (
  //   <>
  //     <div className="w-screen px-10 py-5 ">
  //       {/* main */}
  //       <div className="flex flex-row justify-between">
  //         <div className="flex items-center pt-2">
  //           <div>
  //             <Image
  //               className="rounded-3xl"
  //               src={logo}
  //               alt="logo"
  //               height={50}
  //               width={50}
  //             />
  //           </div>
  //           <div className="px-3 py-3 font-bold">
  //             <h3 className="text-colorB">Birthday-Buddy</h3>
  //           </div>
  //         </div>

  //         {/* ---------------------------- */}
  //         <div className="flex items-center content-center text-white gap-x-4">
  //           <Link className="flex items-center gap-2" href="#">
  //             Features <BsChevronDown />
  //           </Link>

  //           <Link href="#" className="text-yellow-600">
  //             Premium{" "}
  //           </Link>
  //           <Link href="#">
  //             Custom Bot{" "}
  //             <span className="bg-colorB  text-sm rounded-md items-center content-center cursor-pointer px-2 py-1">
  //               new
  //             </span>{" "}
  //           </Link>
  //           <Link href="#">Support Server</Link>
  //         </div>

  //       </div>
  //     </div>
  //   </>
  // );
};

export default Header;
