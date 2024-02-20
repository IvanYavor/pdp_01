"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  href,
}: CustomButtonProps) => {
  const router = useRouter();

  const handleButtonClick = (e: any) => {
    if (handleClick) {
      handleClick(e);
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || "button"}
      onClick={handleButtonClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
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
