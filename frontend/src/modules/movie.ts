interface State {
	movies: string[];
	loading: boolean;
	error: Error | null;
}

export const LOAD_MOVIE_LIST_REQUEST = 'movie/LOAD_MOVIE_LIST_REQUEST' as const;
const LOAD_MOVIE_LIST_SUCCESS = 'movie/LOAD_MOVIE_LIST_SUCCESS' as const;
const LOAD_MOVIE_LIST_FAILURE = 'movie/LOAD_MOVIE_LIST_FAILURE' as const;

export const loadMovieListRequest = () => ({ type: LOAD_MOVIE_LIST_REQUEST });
export const loadMovieListSuccess = (movies: string[]) => ({ type: LOAD_MOVIE_LIST_SUCCESS, movies });
export const loadMovieListFailure = (error: Error) => ({ type: LOAD_MOVIE_LIST_FAILURE, error });

type Action =
	| ReturnType<typeof loadMovieListRequest>
	| ReturnType<typeof loadMovieListSuccess>
	| ReturnType<typeof loadMovieListFailure>;

const initialState: State = {
	movies: [],
	loading: false,
	error: null
};

function reducer(state: State = initialState, action: Action) {
	switch (action.type) {
		case LOAD_MOVIE_LIST_REQUEST: {
			return {
				...state,
				loading: true
			};
		}
		case LOAD_MOVIE_LIST_SUCCESS: {
			return {
				...state,
				movies: action.movies,
				loading: false
			};
		}
		case LOAD_MOVIE_LIST_FAILURE: {
			return {
				...state,
				error: action.error!,
				loading: false
			};
		}
		default:
			return state;
	}
}

export default reducer;
