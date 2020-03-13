const SIGNUP_REQUEST = 'user/SIGNUP_REQUEST' as const;
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS' as const;
const SIGNUP_FAILURE = 'user/SIGNUP_FAILURE' as const;

const LOGIN_REQUEST = 'user/LOGIN_REQUEST' as const;
const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS' as const;
const LOGIN_FAILURE = 'user/LOGIN_FAILURE' as const;

const signupRequest = (email: string, password: string, nickname: string) => ({
	type: SIGNUP_REQUEST,
	payload: { email, password, nickname }
});
const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
const signupFailure = (error: Error) => ({ type: SIGNUP_FAILURE, error });

const loginRequest = (email: string, password: string) => ({ type: LOGIN_REQUEST, payload: { email, password } });
const loginSuccess = (userInfo: any) => ({ type: LOGIN_SUCCESS, payload: userInfo });
const loginFailure = (error: Error) => ({ type: LOGIN_FAILURE, error });

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
}

type Action =
	| ReturnType<typeof signupRequest>
	| ReturnType<typeof signupSuccess>
	| ReturnType<typeof signupFailure>
	| ReturnType<typeof loginRequest>
	| ReturnType<typeof loginSuccess>
	| ReturnType<typeof loginFailure>;

const initialState: State = {
	userInfo: null,
	loginData: null,
	signupData: null
};

function reducer(state: State = initialState, action: Action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;
