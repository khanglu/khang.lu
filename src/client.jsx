import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
const App = require('./App').default;

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('root'));