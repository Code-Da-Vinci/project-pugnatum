import { listWorks } from "../list.js";
import { listThemes } from "../themes.js";

const themes2024 = [
   {
      nameTheme: "Pugnatum - Perdidísimo",
      codeTheme: "perdidisimo",
   },
   {
      nameTheme: "Pugnatum - Parálisis del sueño",
      codeTheme: "pds",
   },
   {
      nameTheme: "Pugnatum - Lloraría con tanta pena",
      codeTheme: "llctp",
   },
   {
      nameTheme: "Pugnatum - Mayday",
      codeTheme: "mayday",
   },
   {
      nameTheme: "Korteks y Pugnatum - Tormenta",
      codeTheme: "tormenta",
   },
   {
      nameTheme: "Pugnatum - Como si fueran horas",
      codeTheme: "csfh",
   },
   {
      nameTheme: "Pugnatum - Pan y hambre",
      codeTheme: "pyh",
   },
   {
      nameTheme: "Pugnatum - Si ves que no despierto",
      codeTheme: "svqnd",
   },
   {
      nameTheme: "Pugnatum - Otra vez",
      codeTheme: "ov",
   },
   {
      nameTheme: "Pugnatum - La sangre que me fluye (Prod. Misery)",
      codeTheme: "lsqmf",
   },
   {
      nameTheme: "Pugnatum - No sé si la culpa es mía",
      codeTheme: "nsslcem",
   },
   {
      nameTheme: "Pugnatum - Es en la espesura de este mar",
      codeTheme: "eeledem",
   },
   {
      nameTheme: "Pugnatum - Disconforme conmigo",
      codeTheme: "dc",
   },
   {
      nameTheme: "Pugnatum - Vitalicio",
      codeTheme: "vitalicio",
   },
   {
      nameTheme: "Pugnatum - Por ti",
      codeTheme: "pt",
   },
   {
      nameTheme: "Pugnatum - Solo",
      codeTheme: "solo",
   },
   {
      nameTheme: "Pugnatum - Cadenas",
      codeTheme: "cadenas",
   },
];

const routeThemes = "works-2024";
const year2024 = document.querySelector(".nav__sumary__2024");
const container2024 = document.querySelector(".works__container__2024");

listWorks(themes2024, year2024, routeThemes);
listThemes(themes2024, container2024, routeThemes);