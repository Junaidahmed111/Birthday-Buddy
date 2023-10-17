"use client";
import React, { useState } from "react";
import featureData from "@/utils/featureData";
import SingleFeature from "@/components/SingleFeature";


const Feature = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const handleFeatureClick = (title: string) => {
    setActiveFeature(title);
  };

  return (
    <section className="flex">
        {featureData.map((feature, index) => (
          <SingleFeature
            key={index}
            title={feature.title}
            description={feature.description}
            active={feature.title === activeFeature}
            onClick={() => handleFeatureClick(feature.title)}
          />
        ))}
    </section>
  );
};

export default Feature;