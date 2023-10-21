import React from "react";
import { BsLaptop, BsPersonCircle } from "react-icons/bs";
import { ImMenu } from "react-icons/im";

const Wishes = () => {
  return (
    <section id="wishes">
      <div className="p-5 text-white py-10">
        <div className="flex flex-col gap-y-4 md:items-center md:text-center">
          <h3 className="text-3xl font-bold lg:text-5xl ">
            Send Everyone Wishes
          </h3>
          <p className="md:w-[60%] gl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            unde delectus dicta ipsam necessitatibus. Nulla.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-12 pt-16 md:px-10">
          <div className="flex flex-col gap-y-6">
            <BsLaptop size="20px" />
            <h3 className="text-xl font-bold hidden lg:block ">
              Setup in seconds
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              magni!
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <ImMenu size="20px" />
            <h3 className="text-xl font-bold hidden lg:block ">Stable</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              magni!
            </p>
          </div>
          <div className="flex flex-col gap-y-6">
            <BsPersonCircle size="20px" />
            <h3 className="text-xl font-bold hidden lg:block ">Free</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              magni!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;
