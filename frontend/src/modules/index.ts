import { combineReducers } from 'redux';
import todo from './todo';
import movie from './movie';
import user from './user';

const rootReducer = combineReducers({
	todo,
	movie,
	user
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
