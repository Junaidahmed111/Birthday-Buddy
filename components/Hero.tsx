import React from "react";
import Button from "./Button";
import { BsFillPlayFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center text-center mt-10 lg:mt-0 lg:h-[90vh]">
      <div className=" text-white p-12 pt-16 flex items-center gap-y-5 flex-col w-full lg:w-[80%]">
        <h1 className=" text-5xl lg:text-7xl ">
          Welcome to Your <br /> <span className="text-colorB">Birthday</span>{" "}
          Buddy
        </h1>
        <p className=" text-lg lg:text-md lg:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Libero eaque
          nostrum nobis excepturi sequi in quibusdam
        </p>
        <div className=" flex flex-row w-full justify-center ">
          <span className="bg-colorB text-white rounded-xl items-center justify-center text-center cursor-pointer text-sm md:text-md h-[7vh]  px-2 lg:py-5 flex gap-1 w-[50%] md:w-[20%] lg:h-[9vh]">
            <BsFillPlayFill /> Manage a server
          </span>
          <span className="bg-'#17181E text-white rounded-xl items-center justify-center cursor-pointer text-sm md:text-md font-semibold h-[7vh] px-2 lg:py-5 flex gap-1 w-[50%] md:w-[20%] lg:h-[9vh] ">
            Manage a server
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
