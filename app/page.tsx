import "./globals.css";
import SearchBar from "@/components/Input";
import { fetchGenres, fetchMovies, getDiscover, getPosterUrl } from "@/utils";
import { HomeProps } from "@/types";
import MovieCard from "@/components/MovieCard";
import Hero from "@/components/Hero";
import CustomFilter from "@/components/CustomFilter";
import { types, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }: HomeProps) {
  const fetchFunction = searchParams?.searchValue
    ? () =>
        fetchMovies({
          searchTerm: searchParams.searchValue,
          year: searchParams.year,
          type: searchParams.type,
        })
    : () =>
        getDiscover({
          genre: Number(searchParams.genre),
          year: searchParams.year,
          type: searchParams.type,
        });

  const genres = await fetchGenres(searchParams.type);

  const result = await fetchFunction();

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
              <CustomFilter
                title="genre"
                options={genres.map((genre: any) => ({
                  title: genre.name,
                  value: genre.id,
                }))}
              />
            </div>
          </div>
        </div>

        {result?.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {result?.map((movie: any) => (
                <MovieCard
                  key={movie.id}
                  movieId={movie.id}
                  title={movie.original_title}
                  posterUrl={getPosterUrl(movie.poster_path)}
                  year={movie.Year}
                  imdbId={movie.id}
                  type={searchParams.type || "movie"}
                />
              ))}
            </div>
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
