import { takeLatest, all, fork, put, actionChannel } from 'redux-saga/effects';
import axios from 'axios';

import {
	SIGNUP_REQUEST,
	LOGIN_REQUEST,
	signupSuccess,
	signupFailure,
	Action,
	loginSuccess,
	loginFailure,
	LOGOUT_REQUEST,
	logoutSuccess,
	logoutFailure,
	LOAD_USER_INFO_REQUEST,
	loadUserInfoSuccess,
	loadUserInfoFailure
} from '../modules/user';

const signupAPI = (payload: { email: string; password: string; nickname: string }) =>
	axios.post('/user/signup', payload);
const loginAPI = (payload: { email: string; password: string }) => axios.post('/user/login', payload);
const logoutAPI = () => axios.post('/user/logout', undefined);
const loadUserInfoAPI = () => axios.get('/user');

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
function* logout() {
	try {
		yield logoutAPI();
		yield put(logoutSuccess());
	} catch (e) {
		yield put(logoutFailure(e));
	}
}
function* loadUserInfo() {
	try {
		const { data } = yield loadUserInfoAPI();
		yield put(loadUserInfoSuccess(data));
	} catch (e) {
		yield put(loadUserInfoFailure(e));
	}
}

function* watchSignup() {
	yield takeLatest(SIGNUP_REQUEST, signup);
}
function* watchLogin() {
	yield takeLatest(LOGIN_REQUEST, login);
}
function* watchLogout() {
	yield takeLatest(LOGOUT_REQUEST, logout);
}
function* watchLoadUserInfo() {
	yield takeLatest(LOAD_USER_INFO_REQUEST, loadUserInfo);
}

export default function* userSaga() {
	yield all([fork(watchSignup), fork(watchLogin), fork(watchLogout), fork(watchLoadUserInfo)]);
}
