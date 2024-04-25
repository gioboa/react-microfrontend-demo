import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

interface Window {
	React: typeof React;
}

window.React = React;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
