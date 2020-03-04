/* eslint-disable global-require */
import path from 'path';
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import express, { Request, Response } from 'express';
// eslint-disable-next-line import/no-unresolved
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import createSagaMiddleware, { END } from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';
import rootReducer from './modules';
import PreloadContext from './PreloadContext';
import rootSaga from './sagas';
import createHtml from './lib/createHtml';

const app = express();

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackConfig = require('../webpack.client.js');

	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');

	const compiler = webpack(webpackConfig);

	app.use(
		webpackDevMiddleware(compiler, {
			logLevel: 'silent',
			publicPath: webpackConfig.output.publicPath
		})
	);

	app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname)));

app.get(
	'*',
	async (req: Request, res: Response): Promise<Response> => {
		const context = {};
		const sagaMiddleware = createSagaMiddleware();

		const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
		const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();
		const preloadContext = {
			done: false,
			promises: []
		};

		const jsx = (
			<PreloadContext.Provider value={(preloadContext as unknown) as any}>
				<Provider store={store}>
					<StaticRouter location={req.url} context={context}>
						<App />
					</StaticRouter>
				</Provider>
			</PreloadContext.Provider>
		);

		renderToStaticMarkup(jsx);
		store.dispatch(END as any);

		try {
			await sagaPromise;
			await Promise.all(preloadContext.promises);
		} catch (e) {
			return res.status(500);
		}
		preloadContext.done = true;

		const root = renderToString(jsx);
		const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
		const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`;

		const helmet = Helmet.renderStatic();

		res.set('content-type', 'text/html');
		return res.send(createHtml(helmet.title.toString(), root, stateScript));
	}
);

app.listen(3003, () => console.log('Server started http://localhost:3003'));
