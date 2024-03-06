"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  text,
  rightIcon,
  ...customButtonProps
}: CustomButtonProps) => {
  return (
    <button
      {...customButtonProps}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${customButtonProps.className}`}
    >
      <span className={`flex-1`}>{text}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
