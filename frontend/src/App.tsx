import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSaga from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
// import loadable from '@loadable/component';

import rootReducer from './modules';
import rootSaga from './sagas';
import Navigation from './components/organisms/Navigation';
import MoviePage from './pages/Movie';
import TodoPage from './pages/Todo';
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
// const Navigation = loadable(() => import('./components/organisms/Navigation'));
// const MoviePage = loadable(() => import('./pages/Movie'));
// const TodoPage = loadable(() => import('./pages/Todo'));

const sagaMiddleware = createSaga();
const middlewares = [sagaMiddleware];
const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));
const store = createStore(rootReducer, undefined, enhancer);
sagaMiddleware.run(rootSaga);

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
			<Switch>
				<Route path="/movie" component={MoviePage} />
				<Route exact path="/" component={TodoPage} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/signup" component={SignupPage} />
				<Route path="/" render={() => <div>404 Not Found</div>} />
			</Switch>
		</Provider>
	);
};

export default App;
