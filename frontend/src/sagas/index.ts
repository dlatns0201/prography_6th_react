import { all, call } from 'redux-saga/effects';
import todo from './todo';

export default function*() {
	yield all([call(todo)]);
}
