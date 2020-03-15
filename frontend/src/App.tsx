import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import loadable from '@loadable/component';

import { loadUserInfoRequest } from './modules/user';
import Navigation from './components/organisms/Navigation';
import MoviePage from './pages/Movie';
import TodoPage from './pages/Todo';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import { RootState } from './modules';
// const Navigation = loadable(() => import('./components/organisms/Navigation'));
// const MoviePage = loadable(() => import('./pages/Movie'));
// const TodoPage = loadable(() => import('./pages/Todo'));

const App = () => {
	const { userInfo } = useSelector((state: RootState) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!userInfo) dispatch(loadUserInfoRequest());
	}, [userInfo]);

	return (
		<>
			<Navigation />
			<Switch>
				<Route path="/movie" component={MoviePage} />
				<Route exact path="/" component={TodoPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/signup" component={SignupPage} />
				<Route path="/" render={() => <div>404 Not Found</div>} />
			</Switch>
		</>
	);
};

export default App;
