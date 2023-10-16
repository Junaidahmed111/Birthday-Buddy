import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <span className="bg-colorB text-white rounded-xl items-center content-center cursor-pointer px-8 py-5">
        {text}
      </span>
    </>
  );
};

export default Button;
