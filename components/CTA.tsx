import React from "react";

const CTA = () => {
  return (
    <section
      id="get-started"
      className="text-white flex items-center flex-col mt-16 gap-12 bg-gradient-to-r from-emerald-500 to-lime-600 lg:p-28 p-0 h-[50vh] justify-center text-center"
    >
      <h1 className="text-4xl">Get Started free for today</h1>
      <span className="bg-colorB font-bold text-white rounded-xl items-center content-center cursor-pointer lg:text-md px-10 py-5 flex gap-1">
        Add to discord
      </span>
    </section>
  );
};

export default CTA;
