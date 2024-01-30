const currentYear = new Date().getFullYear();
const startYear = 1950;

export const yearsOfProduction = [
  { title: "Year", value: "" },
  ...Array.from({ length: currentYear - startYear + 1 }, (_, index) => {
    const year = currentYear - index;
    return { title: year.toString(), value: year.toString() };
  }),
];

export const types = [
  {
    title: "Movie",
    value: "movie",
  },
  {
    title: "Series",
    value: "series",
  },
  {
    title: "Episode",
    value: "episode",
  },
];
