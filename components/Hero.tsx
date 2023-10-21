import React from "react";
import Button from "./Button";
import { BsFillPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center text-center mt-10 lg:mt-0 lg:h-[90vh]">
      <div className=" text-white px-3 lg:p-12 lg:pt-16 flex items-center gap-y-5 flex-col w-full lg:w-[80%]">
        <h1 className=" text-5xl lg:text-7xl ">
          Welcome to Your <br /> <span className="text-colorB">Birthday</span>{" "}
          Buddy
        </h1>
        <p className=" text-lg lg:text-md lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Libero eaque
          nostrum nobis excepturi sequi in quibusdam
        </p>
        <div className=" flex flex-row w-full justify-center gap-x-3">
          <span className="bg-colorB text-white rounded-xl cursor-pointer text-sm md:text-md px-2 py-3 flex place-items-center">
            <BsFillPlayFill /> Manage a server
          </span>
          <span className="text-white rounded-xl cursor-pointer text-sm md:text-md font-semibold px-2 py-3 text-center">
            Manage a server
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
