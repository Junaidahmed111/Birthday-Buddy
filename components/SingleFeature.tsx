import React from "react";

interface SingleFeatureProps {
  title: string;
  description: string;
  active: boolean;
  onClick?: () => void;
}

const SingleFeature = ({
  title,
  description,
  active,
  onClick,
}: SingleFeatureProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        active
          ? "border border-gray-300 rounded-2xl lg:rounded-tl-2xl bg-gray-500/20 text-white py-7 gap-y-3 rounded-bl-2xl flex flex-col px-2 lg:px-5 cursor-pointer"
          : "text-white py-7 gap-y-3 rounded-bl-2xl flex flex-col px-2 lg:px-5 cursor-pointer"
      }`}
    >
      <h1 className="font-semibold lg:text-xl">{title}</h1>
      <span className="hidden lg:flex">{description}</span>
    </div>
  );
};

export default SingleFeature;
