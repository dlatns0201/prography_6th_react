interface State {
	email: string | null;
	nickname: string | null;
}

type Action = {
	type: string;
};

const initialState: State = {
	email: null,
	nickname: null
};

function reducer(state: State = initialState, action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;
