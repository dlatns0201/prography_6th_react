export const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST' as const;
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS' as const;
const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE' as const;

export const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;

export const LOGOUT_REQUEST = 'user/LOGOUT_REQUEST' as const;
const LOGOUT_SUCCESS = 'user/LOGOUT_SUCCESS' as const;
const LOGOUT_FAILURE = 'user/LOGOUT_FAILURE' as const;

export const LOAD_USER_INFO_REQUEST = 'user/LOAD_USER_INFO_REQUEST' as const;
const LOAD_USER_INFO_SUCCESS = 'user/LOAD_USER_INFO_SUCCESS' as const;
const LOAD_USER_INFO_FAILURE = 'user/LOAD_USER_INFO_FAILURE' as const;

export const signupRequest = (email: string, password: string, nickname: string) => ({
	type: SIGNUP_REQUEST,
	payload: { email, password, nickname }
});
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
export const signupFailure = (error: Error) => ({ type: SIGNUP_FAILURE, error });

export const loginRequest = (email: string, password: string) => ({
	type: LOGIN_REQUEST,
	payload: { email, password }
});
export const loginSuccess = (userInfo: any) => ({ type: LOGIN_SUCCESS, payload: userInfo });
export const loginFailure = (error: Error) => ({ type: LOGIN_FAILURE, error });

export const logoutRequest = () => ({ type: LOGOUT_REQUEST });
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const logoutFailure = (error: Error) => ({ type: LOGOUT_FAILURE, error });

export const loadUserInfoRequest = () => ({ type: LOAD_USER_INFO_REQUEST });
export const loadUserInfoSuccess = (payload: any) => ({ type: LOAD_USER_INFO_SUCCESS, payload });
export const loadUserInfoFailure = (error: Error) => ({ type: LOAD_USER_INFO_FAILURE, error });

interface State {
	userInfo: {
		email: string;
		nickname: string;
	} | null;
	loading: {
		signup: boolean;
		login: boolean;
		logout: boolean;
		loadUserInfo: boolean;
	};
	error: {
		login?: string | Error;
		signup?: string | Error;
		logout?: string | Error;
		loadUserInfo?: string | Error;
	} | null;
}

export type Action =
	| ReturnType<typeof signupRequest>
	| ReturnType<typeof signupSuccess>
	| ReturnType<typeof signupFailure>
	| ReturnType<typeof loginRequest>
	| ReturnType<typeof loginSuccess>
	| ReturnType<typeof loginFailure>
	| ReturnType<typeof logoutRequest>
	| ReturnType<typeof logoutSuccess>
	| ReturnType<typeof logoutFailure>
	| ReturnType<typeof loadUserInfoRequest>
	| ReturnType<typeof loadUserInfoSuccess>
	| ReturnType<typeof loadUserInfoFailure>;

const initialState: State = {
	userInfo: null,
	loading: {
		signup: false,
		login: false,
		logout: false,
		loadUserInfo: false
	},
	error: null
};

function reducer(state: State = initialState, action: Action): State {
	switch (action.type) {
		case SIGNUP_REQUEST: {
			return {
				...state,
				loading: {
					...state.loading,
					signup: true
				},
				error: null
			};
		}
		case SIGNUP_SUCCESS: {
			return {
				...state,
				loading: {
					...state.loading,
					signup: false
				}
			};
		}
		case SIGNUP_FAILURE: {
			return {
				...state,
				loading: {
					...state.loading,
					signup: false
				},
				error: {
					...state.error,
					signup: action.error
				}
			};
		}
		case LOGIN_REQUEST: {
			return {
				...state,
				loading: {
					...state.loading,
					login: true
				}
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				loading: {
					...state.loading,
					login: false
				},
				userInfo: action.payload
			};
		}
		case LOGIN_FAILURE: {
			return {
				...state,
				loading: {
					...state.loading,
					login: false
				},
				error: {
					login: action.error
				}
			};
		}
		case LOGOUT_REQUEST: {
			return {
				...state,
				loading: {
					...state.loading,
					logout: true
				},
				error: null
			};
		}
		case LOGOUT_SUCCESS: {
			return {
				...state,
				loading: {
					...state.loading,
					logout: false
				},
				userInfo: null
			};
		}
		case LOGOUT_FAILURE: {
			return {
				...state,
				loading: {
					...state.loading,
					logout: false
				},
				error: {
					logout: action.error
				}
			};
		}
		case LOAD_USER_INFO_REQUEST: {
			return {
				...state,
				loading: {
					...state.loading,
					loadUserInfo: true
				}
			};
		}
		case LOAD_USER_INFO_SUCCESS: {
			return {
				...state,
				loading: {
					...state.loading,
					loadUserInfo: false
				},
				userInfo: action.payload
			};
		}
		case LOAD_USER_INFO_FAILURE: {
			return {
				...state,
				loading: {
					...state.loading,
					loadUserInfo: false
				},
				error: {
					loadUserInfo: action.error
				}
			};
		}
		default: {
			return { ...state };
		}
	}
}

export default reducer;
