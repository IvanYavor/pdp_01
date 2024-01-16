"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Input from "@/components/Input";
import { fetchMovies } from "@/utils";
import MovieCard from "@/components/MovieCard";
import Hero from "@/components/Hero";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async () => {
    try {
      setLoading(true);

      const { Search: result } = await fetchMovies({ searchTerm: searchValue });

      setMovies(result);
    } catch (err) {
      // TODO what to do here?
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);

  console.log({ movies });

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Media search</h1>
          <p>Explore the media you might like</p>

          <div className="home__filters">
            {/* <SearchBar setManufacturer={setManufacturer} setModel={setModel} /> */}
            <Input setSearchValue={setSearchValue} />

            <div className="home__filter-container">
              {/* <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter
                title="year"
                options={yearsOfProduction}
                setFilter={setYear}
              /> */}
            </div>
          </div>
        </div>

        {movies?.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {movies?.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  title={movie.Title}
                  posterUrl={movie.Poster}
                  year={movie.Year}
                  imdbId={movie.imdbID}
                  type={movie.Type}
                />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
          </section>
        ) : (
          <section>
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
