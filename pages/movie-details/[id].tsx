import "../../app/globals.css";

import { fetchMovieDetails, fetchCredits } from "@/utils";
import { GetServerSideProps } from "next";
import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres: { id: number; name: string }[];
  production_companies: { id: number; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  tagline: string;
  video: boolean;
}

interface Actor {
  name: string;
  character: string;
  profile_path: string;
}

interface MovieDetailsProps {
  movie: Movie;
  actors: Actor[];
}

const MovieDetailsPage: React.FC<MovieDetailsProps> = ({ movie, actors }) => {
  const firstFiveActors = actors.slice(0, 5);

  return (
    <div className="home__text-container max-w-4xl mx-auto my-10 pt-6">
      <div className="flex flex-col items-center mx-auto">
        <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
        <div className="mx-auto mb-4">
          <Image
            width={500}
            height={600}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>

      <p className="text-xl mt-4">{movie.overview}</p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 mt-5 text-gray-600 text-sm">
          Genres:
        </h2>
        <ul className="list-disc list-inside ">
          {movie.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Production Companies:</h2>
        <ul className="list-disc list-inside">
          {movie.production_companies.map((company) => (
            <li key={company.id}>{company.name}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Production Countries:</h2>
        <ul className="list-disc list-inside">
          {movie.production_countries.map((country) => (
            <li key={country.iso_3166_1}>{country.name}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Actors:</h2>
        <ul className="list-disc list-inside">
          {firstFiveActors.map((actor) => (
            <li key={actor.name} className="flex items-center mb-2">
              {actor.profile_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-2"
                />
              )}
              <div>
                <p className="font-semibold">{actor.name}</p>
                <p className="text-sm text-gray-600">{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="mb-4">
        <span className="font-semibold">Release Date:</span>{" "}
        {movie.release_date}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Tagline:</span> {movie.tagline}
      </p>
      <p>
        <span className="font-semibold">Video:</span>{" "}
        {movie.video ? "Yes" : "No"}
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  if (!params || !params.id) {
    return { notFound: true };
  }

  const { id } = params;
  const { type } = query;

  try {
    const response: any = await fetchMovieDetails(id as string, type as string);
    const movie = response?.data;

    // TODO add actors
    const responseActors = await fetchCredits(id as string, type as string);
    const actors = responseActors?.data?.cast;
    return { props: { movie, actors } };
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return { notFound: true };
  }
};

export default MovieDetailsPage;
