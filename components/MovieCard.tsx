"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

// TODO add type checking
function MovieCard({ title, posterUrl, type, year, imdbId }: any) {
  const handleButtonClick = () => {
    // TODO add logic to redirect or open modal
    console.log("Button clicked!");
  };

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{title}</h2>
      </div>

      <div className="relative w-full h-140 my-3 flex items-center justify-center">
        <img
          src={posterUrl !== "N/A" ? posterUrl : "image_not_found.png"}
          alt="Movie"
          className="object-contain"
          style={{ width: "300px", height: "400px" }}
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            // TODO add logic to redirect or open modal
            // handleClick={() => setIsOpen(true)}
            handleClick={handleButtonClick}
          />
        </div>
      </div>

      {/* TODO if decide to go with modal update this line */}
      {/* <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      /> */}
    </div>
  );
}

export default MovieCard;
