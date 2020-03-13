export const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST' as const;
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS' as const;
const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE' as const;

export const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;

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

interface State {
	userInfo: {
		email: string;
		nickname: string;
	} | null;
	loginData: {
		email: string;
		password: string;
	} | null;
	signupData: {
		email: string;
		password: string;
		nickname: string;
	} | null;
	loading: {
		signup: boolean;
		login: boolean;
	};
	error: {
		login?: string | Error;
		signup?: string | Error;
	} | null;
}

export type Action =
	| ReturnType<typeof signupRequest>
	| ReturnType<typeof signupSuccess>
	| ReturnType<typeof signupFailure>
	| ReturnType<typeof loginRequest>
	| ReturnType<typeof loginSuccess>
	| ReturnType<typeof loginFailure>;

const initialState: State = {
	userInfo: null,
	loginData: null,
	signupData: null,
	loading: {
		signup: false,
		login: false
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
		default: {
			return { ...state };
		}
	}
}

export default reducer;
