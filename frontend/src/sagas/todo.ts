import { takeLatest, all, fork, put } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';
import {
	LOAD_TODOS_REQUEST,
	INSERT_TODO_REQUEST,
	UPDATE_TODO_REQUEST,
	DELETE_TODO_REQUEST,
	loadTodosSuccess,
	loadTodosFailure,
	insertTodoRequest,
	insertTodoSuccess,
	insertTodoFailure,
	updateTodoRequest,
	updateTodoSuccess,
	updateTodoFailure,
	deleteTodoSuccess,
	deleteTodoFailure,
	// eslint-disable-next-line no-unused-vars
	Todo,
	deleteTodoRequest
} from '../modules/todo';
const storedData = [
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
];

const loadTodosAPI = () =>
	// axios
	new Promise(resolve => {
		setTimeout(() => {
			resolve(storedData);
		}, 1000);
	});
function* loadTodos() {
	try {
		const todos = yield loadTodosAPI();
		yield put(loadTodosSuccess(todos));
	} catch (e) {
		yield put(loadTodosFailure(e));
	}
}

const insertTodoAPI = (text: string) =>
	// axios
	new Promise(resolve => {
		setTimeout(() => {
			const uid = uuid();
			const todo = {
				id: uid,
				text
			};
			resolve(todo);
		}, 500);
	});
function* insertTodo(action: ReturnType<typeof insertTodoRequest>) {
	try {
		const todo = yield insertTodoAPI(action.text);
		yield put(insertTodoSuccess(todo));
	} catch (e) {
		yield put(insertTodoFailure(e));
	}
}

const updateTodoAPI = (todo: Todo) =>
	// axios
	new Promise(resolve => {
		setTimeout(() => {
			resolve(todo);
		}, 500);
	});
function* updateTodo(action: ReturnType<typeof updateTodoRequest>) {
	try {
		const todo = yield updateTodoAPI(action.todo);
		yield put(updateTodoSuccess(todo));
	} catch (e) {
		yield put(updateTodoFailure(e));
	}
}

const deleteTodoAPI = (id: string) =>
	// axios
	new Promise(resolve => {
		setTimeout(() => {
			resolve(id);
		}, 500);
	});
function* deleteTodo(action: ReturnType<typeof deleteTodoRequest>) {
	try {
		const deletedId = yield deleteTodoAPI(action.id);
		yield put(deleteTodoSuccess(deletedId));
	} catch (e) {
		yield put(deleteTodoFailure(e));
	}
}

function* watchLoadTodos() {
	yield takeLatest(LOAD_TODOS_REQUEST, loadTodos);
}
function* watchInsertTodo() {
	yield takeLatest(INSERT_TODO_REQUEST, insertTodo);
}
function* watchUpdateTodo() {
	yield takeLatest(UPDATE_TODO_REQUEST, updateTodo);
}
function* watchDeleteTodo() {
	yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}

export default function* todoSaga() {
	yield all([fork(watchLoadTodos), fork(watchInsertTodo), fork(watchUpdateTodo), fork(watchDeleteTodo)]);
}
