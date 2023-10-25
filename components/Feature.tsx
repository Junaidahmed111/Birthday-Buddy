"use client";

import React, { useState } from "react";
import featureData from "@/utils/featureData";
import SingleFeature from "./SingleFeature";
import Image from "next/image";

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState<string>("Feature 1");

  const handleFeatureClick = (title: string) => {
    setActiveFeature(title);
  };

  const activeFeatureData = featureData.find(
    (feature) => feature.title === activeFeature
  );
  const activeFeatureImgUrl = activeFeatureData ? activeFeatureData.imgUrl : "";

  return (
    <section id="features" className="my-16">
      <div className="text-white flex justify-center lg:py-14">
        <h1 className="font-bold text-3xl lg:text-5xl">Features</h1>
      </div>
    <div className="flex flex-col lg:flex-row gap-x-5 gap-y-5 w-full py-5 md:py-0 md:h-screen justify-evenly" >
        <div className="flex flex-row lg:flex-col items-center justify-center flex-1 lg:flex-[0.4] gap-x-4 pl-4 text-sm">
          {featureData.map((feature, index) => (
            <SingleFeature
              key={index}
              title={feature.title}
              description={feature.description}
              active={feature.title === activeFeature}
              onClick={() => handleFeatureClick(feature.title)}
            />
          ))}
        </div>
        <div className="flex-2 lg:flex-[0.5]">
          {activeFeatureImgUrl && (
            <Image
              className="w-full md:max-lg:h-[50%] h-[100%] px-5 lg:px-0 rounded-[5rem] lg:!rounded-2xl"
              src={activeFeatureImgUrl}
              width={2000}
              height={2000}
              alt="Feature Image"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
