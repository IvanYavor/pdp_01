import { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/Input";
import { fetchMovies } from "@/utils";
import { HomeProps } from "@/types";
import MovieCard from "@/components/MovieCard";
import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import { types, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
  const movies = await fetchMovies({
    searchTerm: searchParams?.searchValue || "Barbie",
    year: searchParams?.year || "2023",
    type: searchParams?.type || "Movie",
  });

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Media search</h1>
          <p>Explore the media you might like</p>

          <div className="home__filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="type" options={types} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
        </div>

        {movies?.Search?.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {/* TODO add type */}
              {movies?.Search.map((movie: any) => (
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

            {
              <div className="mt-16 w-full flex-center">
                <Image
                  src="/loader.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            }
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
