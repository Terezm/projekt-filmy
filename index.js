// /* tady bude tvůj kód */
// console.log('JavaScript ve stránce funguje');






const movieList = document.querySelector('#movies')

const Movie = ({ posterUrl, title, url, year, genres }) => {
	return `
		<div class="movie">
			<img class="movie__img" src="${posterUrl}" alt="${title}">
			<h2 class="movie__title"><a href="${url}">${title}</a></h2>
			<p class="movie__year">${year}</p>
			<p class="movie__genre">${genres.join(', ')}</p>
		</div>
	`
}

const showMovies = (filmy) => {
	filmy.sort((a, b) => a.title.localeCompare(b.title))
	filmy.forEach((film) => {
		movieList.innerHTML += Movie(film)
	})
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
	.then((odpoved) => odpoved.json())
	.then(showMovies)