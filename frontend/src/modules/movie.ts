interface Movie {
	id?: string;
	title: string;
}

interface State {
	movies: Movie[];
}

type Action = { type: string };

const initialState: State = {
	movies: [
		{
			title: 'Server Side Rendering'
		},
		{
			title: 'Atomic Design'
		}
	]
};

function reducer(state: State = initialState, action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;
