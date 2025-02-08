import { listWorks } from "../list.js";
import { listThemes } from "../themes.js";

const themes2023 = [
   {
      nameTheme: "Pugnatum - Me ha vuelto a matar",
      codeTheme: "mhvam",
   },
   {
      nameTheme: "Pugnatum - Desequilibrio",
      codeTheme: "desequilibrio",
   },
   {
      nameTheme: "Pugnatum - Marear la perdiz",
      codeTheme: "mlp",
   },
   {
      nameTheme: "Pugnatum - Bajocero (Prod. Misery)",
      codeTheme: "bajocero",
   },
   {
      nameTheme: "Korteks y Pugnatum - Cianuro",
      codeTheme: "cianuro",
   },
   {
      nameTheme: "Pugnatum - Adiós",
      codeTheme: "adios",
   },
   {
      nameTheme: "Pugnatum - Tenia",
      codeTheme: "tenia",
   },
   {
      nameTheme: "Pugnatum - Matices",
      codeTheme: "matices",
   },
   {
      nameTheme: "Pugnatum - Celos retrospectivos",
      codeTheme: "cr",
   },
   {
      nameTheme: "Pugnatum - Años luz",
      codeTheme: "al",
   },
];

const routeThemes = "works-2023";
const year2023 = document.querySelector(".nav__sumary__2023");
const container2023 = document.querySelector(".works__container__2023");

listWorks(themes2023, year2023, routeThemes);
listThemes(themes2023, container2023, routeThemes);