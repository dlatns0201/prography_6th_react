import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';

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

ReactDOM.render(
	<BrowserRouter>
		<GlobalStyle />
		<App />
	</BrowserRouter>,
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
