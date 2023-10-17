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
    <section className="flex flex-col lg:flex-row">
      <div className="flex flex-row lg:flex-col flex-1 lg:flex-[0.4]">
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
      <div className="flex-1 lg:flex-[0.6]">
        {activeFeatureImgUrl && (
          <Image
            className="w-[95%] h-[70%]"
            src={activeFeatureImgUrl}
            width={600}
            height={500}
            alt="Feature Image"
          />
        )}
      </div>
    </section>
  );
};

export default Feature;
