import { all, call } from 'redux-saga/effects';
import todo from './todo';
import movie from './movie';
import user from './user';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export default function*() {
	yield all([call(todo), call(movie), call(user)]);
}
