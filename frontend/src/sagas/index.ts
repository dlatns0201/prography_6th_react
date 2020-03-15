import { all, call } from 'redux-saga/effects';
import axios from 'axios';

import todo from './todo';
import movie from './movie';
import user from './user';

axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true;

export default function*() {
	yield all([call(todo), call(movie), call(user)]);
}
