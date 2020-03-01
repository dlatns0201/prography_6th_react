import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/organisms/Navigation';
import MoviePage from './pages/Movie';
import TodoPage from './pages/Todo';

const App = () => {
	return (
		<>
			<Navigation />
			<Switch>
				<Route path="/movie" component={MoviePage} />
				<Route exact path="/" component={TodoPage} />
				<Route path="/" render={() => <div>404 Not Found</div>} />
			</Switch>
		</>
	);
};

export default App;
