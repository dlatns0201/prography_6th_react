import { takeLatest, all, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
	LOAD_TODOS_REQUEST,
	INSERT_TODO_REQUEST,
	UPDATE_TODO_REQUEST,
	DELETE_TODO_REQUEST,
	loadTodosRequest,
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
	deleteTodoRequest,
	toggleTodoRequest,
	toggleTodoFAILURE,
	toggleTodoSuccess,
	TOGGLE_TODO_REQUEST
} from '../modules/todo';

const storedData = [
	{
		id: 'd251fc48-b2a1-4b52-b0bf-147896235917',
		text: 'Server Side Rendering',
		done: false,
		writeMode: false
	},
	{
		id: '241d6376-f2cc-4f98-99a9-ea54232b89db',
		text: 'Atomic Design',
		done: true,
		writeMode: false
	}
];

const loadTodosAPI = () => axios.get('/todo');

function* loadTodos(action: ReturnType<typeof loadTodosRequest>) {
	try {
		const { data } = yield loadTodosAPI();
		data.forEach((todo: Todo) => Object.assign(todo, { writeMode: false }));
		yield put(loadTodosSuccess(data));
	} catch (e) {
		yield put(loadTodosFailure(e));
	}
}

const insertTodoAPI = (description: string) => axios.post('/todo', { description });
function* insertTodo(action: ReturnType<typeof insertTodoRequest>) {
	try {
		const { data } = yield insertTodoAPI(action.text);
		data.writeMode = false;

		yield put(insertTodoSuccess(data));
	} catch (e) {
		yield put(insertTodoFailure(e));
	}
}

const updateTodoAPI = (id: string, description: string) => axios.patch(`/todo/${id}/description/${description}`);
function* updateTodo(action: ReturnType<typeof updateTodoRequest>) {
	try {
		const { id, description } = action.payload;
		const { data } = yield updateTodoAPI(id, description);
		yield put(updateTodoSuccess(data));
	} catch (e) {
		yield put(updateTodoFailure(e));
	}
}

const deleteTodoAPI = (id: string) => axios.delete(`/todo/${id}`);
function* deleteTodo(action: ReturnType<typeof deleteTodoRequest>) {
	try {
		yield deleteTodoAPI(action.id);
		yield put(deleteTodoSuccess(action.id));
	} catch (e) {
		yield put(deleteTodoFailure(e));
	}
}

const toggleTodoDoneAPI = (id: string, done: boolean) => axios.patch(`/todo/${id}/done/${done}`);

function* toggleTodoDone(action: ReturnType<typeof toggleTodoRequest>) {
	try {
		const { id, done } = action.payload;
		const { data } = yield toggleTodoDoneAPI(id, !done);
		data.writeMode = false;
		console.log(data.done);
		yield put(toggleTodoSuccess(data));
	} catch (e) {
		yield put(toggleTodoFAILURE(e));
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
function* watchToggleTodoDone() {
	yield takeEvery(TOGGLE_TODO_REQUEST, toggleTodoDone);
}

export default function* todoSaga() {
	yield all([
		fork(watchLoadTodos),
		fork(watchInsertTodo),
		fork(watchUpdateTodo),
		fork(watchDeleteTodo),
		fork(watchToggleTodoDone)
	]);
}
