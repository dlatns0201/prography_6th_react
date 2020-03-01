import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`;

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);
