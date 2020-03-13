import { takeLatest, all, fork, put } from 'redux-saga/effects';
import { SIGNUP_REQUEST, LOGIN_REQUEST, signupSuccess, signupFailure, Action } from '../modules/user';
import axios from 'axios';

const signupAPI = (payload: { email: string; password: string; nickname: string }) =>
	new Promise(resolve => {
		resolve();
	});

function* signup(action: Action) {
	if (action.type !== 'user/SIGNUP_REQUEST') return;

	try {
		yield signupAPI(action.payload);
		yield put(signupSuccess());
		window.location.href = '/login';
	} catch (e) {
		yield put(signupFailure(e));
	}
}

function* watchSignup() {
	yield takeLatest(SIGNUP_REQUEST, signup);
}

export default function* userSaga() {
	yield all([fork(watchSignup)]);
}
