import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  heading: string;
  members: string;
  image: StaticImageData;
}

const Card = ({ heading, members, image }: CardProps) => {
  return (
    <>
      <div className="flex justify-center hover:scale-110 transition-all delay-[250] w-full cursor-pointer ">
        <Image
          className="aspect-square"
          src={image}
          alt="birthday-pic"
          width={60}
          height={60}
        />
        <div className="bg-gray-700 rounded-lg px-10 lg:px-2 flex flex-col items-center justify-center">
          <h4>{heading}</h4>
          <span>{members}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
