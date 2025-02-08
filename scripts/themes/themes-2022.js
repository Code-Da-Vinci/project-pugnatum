import { listWorks } from "../list.js";
import { listThemes } from "../themes.js";

const themes2022 = [
   {
      nameTheme: "Pugnatum - Rey de nada",
      codeTheme: "rdn",
   },
   {
      nameTheme: "Pugnatum - Cicatrices",
      codeTheme: "cicatrices",
   },
   {
      nameTheme: "Pugnatum - Lo siento",
      codeTheme: "ls",
   },
   {
      nameTheme: "Pugnatum - Casi todo en contra",
      codeTheme: "ctec",
   },
   {
      nameTheme: "Pugnatum - Menos de un minuto de silencio",
      codeTheme: "mdumds",
   },
];

const routeThemes = "works-2022";
const year2022 = document.querySelector(".nav__sumary__2022");
const container2022 = document.querySelector(".works__container__2022");

listWorks(themes2022, year2022, routeThemes);
listThemes(themes2022, container2022, routeThemes);