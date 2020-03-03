import { takeLatest, all, fork, put } from 'redux-saga/effects';
import axios from 'axios';
import { LOAD_MOVIE_LIST_REQUEST, loadMovieListSuccess, loadMovieListFailure } from '../modules/movie';

const loadMoviesAPI = () => axios.get('https://yts.mx/api/v2/list_movies.json?limit=50');
function* loadMovies() {
	try {
		const { data: loadedData } = yield loadMoviesAPI();
		const movieData = loadedData.data.movies;
		const movieTitles = movieData.map((data: any) => data.title);

		yield put(loadMovieListSuccess(movieTitles));
	} catch (e) {
		yield put(loadMovieListFailure(e));
	}
}

function* watchLoadMovies() {
	yield takeLatest(LOAD_MOVIE_LIST_REQUEST, loadMovies);
}

export default function* todoSaga() {
	yield all([fork(watchLoadMovies)]);
}
