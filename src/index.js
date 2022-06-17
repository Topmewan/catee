import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages';
import { CatProvider } from './context/CatContext';
import './global.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CatProvider>
			<App />
		</CatProvider>
	</React.StrictMode>
);
