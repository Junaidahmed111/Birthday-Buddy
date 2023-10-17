import React from "react";
import Button from "./Button";
import{BsFillPlayFill} from 'react-icons/bs'


const Hero = () => {
  return (
    <section className="w-full flex items-center justify-center text-center mt-10">
      <div className=" text-white p-12 pt-16 flex items-center gap-y-5 flex-col w-[60%]">
        <h1 className="text-7xl">
          Welcome to Your <br /> <span className="text-colorB" >Birthday</span>{" "}
          Buddy
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Libero eaque
          nostrum nobis excepturi sequi in quibusdam
        </p>
        <div className=" flex flex-row">
        <span className="bg-colorB text-white rounded-xl items-center content-center cursor-pointer px-10 py-5 flex gap-1">
            <BsFillPlayFill/> Manage a server
          </span>
          <span className="bg-'#17181E text-white rounded-xl items-center content-center cursor-pointer px-10 py-5">
            Manage a server
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
