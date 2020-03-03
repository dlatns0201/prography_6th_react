interface Todo {
	id: string;
	text: string;
	done: boolean;
}

interface State {
	todos: Todo[];
}

type Action = { type: string };

const initialState: State = {
	todos: [
		{
			id: 'd251fc48-b2a1-4b52-b0bf-147896235917',
			text: 'Server Side Rendering',
			done: false
		},
		{
			id: '241d6376-f2cc-4f98-99a9-ea54232b89db',
			text: 'Atomic Design',
			done: true
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
