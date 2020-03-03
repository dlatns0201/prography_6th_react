export interface Todo {
	id: string;
	text: string;
	done: boolean;
}

interface State {
	loading: boolean;
	todos: Todo[];
}

export const LOAD_TODOS_REQUEST = 'todo/LOAD_TODOS_REQUEST' as const;
const LOAD_TODOS_SUCCESS = 'todo/LOAD_TODOS_SUCCESS' as const;
const LOAD_TODOS_FAILURE = 'todo/LOAD_TODOS_FAILURE' as const;

export const INSERT_TODO_REQUEST = 'todo/INSERT_TODO_REQUEST' as const;
const INSERT_TODO_SUCCESS = 'todo/INSERT_TODO_SUCCESS' as const;
const INSERT_TODO_FAILURE = 'todo/INSERT_TODO_FAILURE' as const;

export const UPDATE_TODO_REQUEST = 'todo/UPDATE_TODO_REQUEST' as const;
const UPDATE_TODO_SUCCESS = 'todo/UPDATE_TODO_SUCCESS' as const;
const UPDATE_TODO_FAILURE = 'todo/UPDATE_TODO_FAILURE' as const;

export const DELETE_TODO_REQUEST = 'todo/DELETE_TODO_REQUEST' as const;
const DELETE_TODO_SUCCESS = 'todo/DELETE_TODO_SUCCESS' as const;
const DELETE_TODO_FAILURE = 'todo/DELETE_TODO_FAILURE' as const;

export const loadTodosRequest = () => ({ type: LOAD_TODOS_REQUEST });
export const loadTodosSuccess = (todos: Todo[]) => ({ type: LOAD_TODOS_SUCCESS, todos });
export const loadTodosFailure = (error: Error) => ({ type: LOAD_TODOS_FAILURE, error });

export const insertTodoRequest = (text: string) => ({ type: INSERT_TODO_REQUEST, text });
export const insertTodoSuccess = (todo: Todo) => ({ type: INSERT_TODO_SUCCESS, todo });
export const insertTodoFailure = (error: Error) => ({ type: INSERT_TODO_FAILURE, error });

export const updateTodoRequest = (todo: Todo) => ({ type: UPDATE_TODO_REQUEST, todo });
export const updateTodoSuccess = (todo: Todo) => ({ type: UPDATE_TODO_SUCCESS, todo });
export const updateTodoFailure = (error: Error) => ({ type: UPDATE_TODO_FAILURE, error });

export const deleteTodoRequest = (id: string) => ({ type: DELETE_TODO_REQUEST, id });
export const deleteTodoSuccess = (id: string) => ({ type: DELETE_TODO_SUCCESS, id });
export const deleteTodoFailure = (error: Error) => ({ type: DELETE_TODO_FAILURE, error });

export type Action =
	| ReturnType<typeof loadTodosRequest>
	| ReturnType<typeof loadTodosSuccess>
	| ReturnType<typeof loadTodosFailure>
	| ReturnType<typeof insertTodoRequest>
	| ReturnType<typeof insertTodoSuccess>
	| ReturnType<typeof insertTodoFailure>
	| ReturnType<typeof updateTodoRequest>
	| ReturnType<typeof updateTodoSuccess>
	| ReturnType<typeof updateTodoFailure>
	| ReturnType<typeof deleteTodoRequest>
	| ReturnType<typeof deleteTodoSuccess>
	| ReturnType<typeof deleteTodoFailure>;

const initialState: State = {
	loading: false,
	todos: []
};

function reducer(state: State = initialState, action: Action) {
	switch (action.type) {
		case LOAD_TODOS_REQUEST:
		case INSERT_TODO_REQUEST:
		case UPDATE_TODO_REQUEST:
		case DELETE_TODO_REQUEST:
			return {
				...state,
				loading: true
			};
		case LOAD_TODOS_SUCCESS:
			return {
				...state,
				todos: action.todos,
				loading: false
			};
		case INSERT_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.concat(action.todo),
				loading: false
			};
		case UPDATE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.map(v => (v.id === action.todo.id ? action.todo : v)),
				loading: false
			};
		case DELETE_TODO_SUCCESS:
			return {
				...state,
				todos: state.todos.filter(v => v.id !== action.id),
				loading: false
			};
		case LOAD_TODOS_FAILURE:
		case INSERT_TODO_FAILURE:
		case UPDATE_TODO_FAILURE:
		case DELETE_TODO_FAILURE:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}

export default reducer;
