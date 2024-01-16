"use client";

import React, { useState } from "react";
import Image from "next/image";

const Input = ({ setSearchValue }) => {
  const [localSearchValue, setLocalSearchValue] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (localSearchValue === "") {
      return alert("Please fill in the search bar");
    }

    setSearchValue(localSearchValue.toLowerCase());
  };

  return (
    // <div>
    //   <input onChange={(e) => setSearchValue(e.target.value)} />
    // </div>

    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        {/* <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" /> */}
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Movie"
        />
        <input
          type="text"
          name="model"
          value={localSearchValue}
          onChange={(e) => setLocalSearchValue(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        {/* <SearchButton otherClasses="sm:hidden" /> */}
      </div>
      {/* <SearchButton otherClasses="max-sm:hidden" /> */}
    </form>
  );
};

export default Input;
