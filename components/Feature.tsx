"use client";
import React, { useState } from "react";
import featureData from "@/utils/featureData";
import SingleFeature from "./SingleFeature";
import Image from "next/image";

import imgTemp from '@/public/assets/birthday.webp'

const Feature = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const handleFeatureClick = (title: string) => {
    setActiveFeature(title);
  };

  return (
    <section className="flex">
      <div className="flex flex-col flex-[0.4]">
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
      <div className="flex-[0.6]">
        <Image className="w-[95%] h-[70%]" src={imgTemp} width={600} height={500} alt="Feature Image"/>
      </div>
    </section>
  );
};

export default Feature;
