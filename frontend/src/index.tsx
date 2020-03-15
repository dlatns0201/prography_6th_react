import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { createStore, compose, applyMiddleware } from 'redux';
import createSaga from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { RootState } from './modules';
import rootSaga from './sagas';
// import { hydrate } from 'react-dom';
// import { loadableReady } from '@loadable/component';

import App from './App';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        background-color: #ecf0f1;
	    width: 100vw;
	    min-height: 100vh;
    }
    ul {
        padding: 0;
        margin: 0;

        li {
            list-style: none;
        }
    }
`;

const sagaMiddleware = createSaga();
const middlewares = [sagaMiddleware];
const enhancer = compose(composeWithDevTools(applyMiddleware(...middlewares)));
const store = createStore(rootReducer, undefined, enhancer);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyle />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// loadableReady(() => {
// 	hydrate(
// 		<BrowserRouter>
// 			<GlobalStyle />
// 			<App />
// 		</BrowserRouter>,
// 		document.getElementById('root')
// 	);
// });
