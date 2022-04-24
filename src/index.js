import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider } from './utils/Store';

ReactDOM.render(
	<Router>
		<StoreProvider>
			<App />
		</StoreProvider>
	</Router>,
	document.getElementById('root')
);
