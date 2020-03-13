import { takeLatest, all, fork, put } from 'redux-saga/effects';
import {
	SIGNUP_REQUEST,
	LOGIN_REQUEST,
	signupSuccess,
	signupFailure,
	Action,
	loginSuccess,
	loginFailure
} from '../modules/user';
import axios from 'axios';

const signupAPI = (payload: { email: string; password: string; nickname: string }) =>
	new Promise(resolve => {
		resolve();
	});
const loginAPI = (payload: { email: string; password: string }) =>
	new Promise(resolve => {
		resolve({
			data: {
				email: 'dlatns0201@gmail.com',
				nickname: 'taehyun'
			}
		});
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
function* login(action: Action) {
	if (action.type !== 'user/LOGIN_REQUEST') return;

	try {
		const { data } = yield loginAPI(action.payload);
		yield put(loginSuccess(data));
	} catch (e) {
		yield put(loginFailure(e));
	}
}

function* watchSignup() {
	yield takeLatest(SIGNUP_REQUEST, signup);
}
function* watchLogin() {
	yield takeLatest(LOGIN_REQUEST, login);
}

export default function* userSaga() {
	yield all([fork(watchSignup), fork(watchLogin)]);
}
