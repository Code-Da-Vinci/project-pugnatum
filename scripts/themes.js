export function listThemes(array, year, route) {
   array.forEach(theme => {
      year.insertAdjacentHTML('beforeend', `
         <a class="card" href="${route}/${theme.codeTheme}.html">
            <picture class="card__picture">
               <source srcset="images-webp/${theme.codeTheme}.webp" type="image/webp">
               <source srcset="image/${theme.codeTheme}.jpg" type="images-jpg/jpeg">
               <img class="card__image" src="images-jpg/${theme.codeTheme}.jpg" alt="${theme.nameTheme}" loading="lazy">
            </picture>
               
            <div class="card__footer">
               <h3 class="card__title">${theme.nameTheme} [Letra]</h3>
            </div>
         </a>

      `);
   });
};