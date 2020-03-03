import { all, call } from 'redux-saga/effects';
import todo from './todo';
import movie from './movie';

export default function*() {
	yield all([call(todo), call(movie)]);
}
