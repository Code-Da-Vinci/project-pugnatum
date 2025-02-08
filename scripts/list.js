export function listWorks(arrayThemes, year, routeList) {
   arrayThemes.forEach(theme => {
      year.insertAdjacentHTML('beforeend', `
         <a class="nav__sumary__letter" href="${routeList}/${theme.codeTheme}.html">${theme.nameTheme} </a>

      `);
   });
};