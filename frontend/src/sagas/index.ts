import { all, call } from 'redux-saga/effects';
import todo from './todo';
import movie from './movie';
import user from './user';

export default function*() {
	yield all([call(todo), call(movie), call(user)]);
}
