export const getCodeUri = () => {
	return window.location.search.split('code=')[1].split('&')[0]
}