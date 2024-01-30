"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [localSearchValue, setLocalSearchValue] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (localSearchValue === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(localSearchValue.toLowerCase());
  };

  const updateSearchParams = (searchValue: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchValue) {
      searchParams.set("searchValue", searchValue);
    } else {
      searchParams.delete("searchValue");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Image
          src="/icons8-movie-50.png"
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
          placeholder="Spider-man..."
          className="searchbar__input"
        />
      </div>
      <SearchButton otherClasses="" />
    </form>
  );
};

export default SearchBar;
