import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Navigation from './components/organisms/Navigation';
import MoviePage from './pages/Movie';
import TodoPage from './pages/Todo';
import rootReducer from './modules';

const AppContainer = styled.div`
	background-color: #ecf0f1;
	width: 100vw;
	min-height: 100vh;
`;

const store = createStore(rootReducer);

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
