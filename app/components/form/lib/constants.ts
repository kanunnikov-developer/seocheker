export const CITIES = [
  { nameRu: "Москва", canonical: "Moscow,Moscow,Russia" },
  { nameRu: "Ростов-на-Дону", canonical: "Rostov-on-Don,Rostov Oblast,Russia" },
  { nameRu: "Краснодар", canonical: "Krasnodar,Krasnodar Krai,Russia" },
] as const;

export type CityValue = (typeof CITIES)[number]["canonical"];
