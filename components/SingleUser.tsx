import Image, { StaticImageData } from "next/image";
import React from "react";
import birthdayOne from "@/public/assets/birthday.webp";

interface CardProps {
  heading: string;
  members: string;
  image: StaticImageData;
}

const Card = ({ heading, members, image }: CardProps) => {
  return (
    <>
      <div className="flex justify-center hover:scale-110 transition-all delay-[250] w-full cursor-pointer">
        <Image src={image} alt="birthday-pic" height={60} width={60} />
        <div className="bg-gray-700 rounded-lg px-10 lg:px-2">
          <h4>{heading}</h4>
          <span>{members}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
