"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";

function MovieCard({ movieId, title, posterUrl, type }: any) {
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

      <CustomButton
        title="View More"
        containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        rightIcon="/right-arrow.svg"
        href={`/movie-details/${movieId}?type=${type}`}
      />
    </div>
  );
}

export default MovieCard;
