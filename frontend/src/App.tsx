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
// const Navigation = loadable(() => import('./components/organisms/Navigation'));
// const MoviePage = loadable(() => import('./pages/Movie'));
// const TodoPage = loadable(() => import('./pages/Todo'));

const AppContainer = styled.div`
	background-color: #ecf0f1;
	width: 100vw;
	min-height: 100vh;
`;

const sagaMiddleware = createSaga();
const middlewares = [sagaMiddleware];
const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));
const store = createStore(rootReducer, undefined, enhancer);
sagaMiddleware.run(rootSaga);

const App = () => {
	return (
		<Provider store={store}>
			<AppContainer>
				<Navigation />
				<Switch>
					<Route path="/movie" component={MoviePage} />
					<Route exact path="/" component={TodoPage} />
					<Route path="/" render={() => <div>404 Not Found</div>} />
				</Switch>
			</AppContainer>
		</Provider>
	);
};

export default App;
