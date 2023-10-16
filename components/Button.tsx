import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <>
      <span className="bg-colorB text-white rounded-xl items-center content-center cursor-pointer">
        {text}
      </span>
    </>
  );
};

export default Button;
