import React from "react";
import Image from "next/image";

// TODO add type checking
function MovieCard({ title, posterUrl, type, year, imdbId }) {
  console.log({ posterUrl });

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{title}</h2>
      </div>

      <div className="relative w-full h-40 my-3 object-contain">
        <img src={posterUrl} alt="Movie" className="object-contain" />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {/* <div className="flex flex-col justify-center items-center gap-2">
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MGP</p>
          </div> */}
        </div>

        <div className="car-card__btn-container">
          {/* <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          /> */}
        </div>
      </div>

      {/* <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      /> */}
    </div>
  );
}

export default MovieCard;
