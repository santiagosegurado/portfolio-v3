import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  style?: "primary" | "default" | "ghost";
}

const Button = ({ children, style = "default" }: ButtonProps) => {
  let buttonStyle;

  if (style === "primary") {
    buttonStyle = "bg-accentOrange text-primaryBlack hover:bg-[#FFAC6B]";
  } else if (style === "ghost") {
    buttonStyle =
      "bg-transparent border border-secondaryWhite text-secondaryWhite hover:opacity-80";
  } else {
    buttonStyle = "bg-[#1C2B3A] text-secondaryWhite hover:bg-[#263B50]";
  }

  return (
    <button
      className={`flex flex-row items-center justify-center gap-1 rounded-[0.5em]  px-4 py-2 ${buttonStyle} transition duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
