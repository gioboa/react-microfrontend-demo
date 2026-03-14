import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

type MountProps = {
	message: string;
	hostVersion: string;
	remoteVersion: string;
};

type RemoteRoot = {
	render: (props: MountProps) => void;
	unmount: () => void;
};

export function mount(container: HTMLElement, props: MountProps): RemoteRoot {
	const root = ReactDOM.createRoot(container);
	const render = (nextProps: MountProps) => {
		root.render(
			<React.StrictMode>
				<App {...nextProps} />
			</React.StrictMode>,
		);
	};

	render(props);

	return {
		render,
		unmount: () => root.unmount(),
	};
}
