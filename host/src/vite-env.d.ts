/// <reference types="vite/client" />

declare module 'remote/mount' {
	type RemoteMountProps = {
		message: string;
		hostVersion: string;
		remoteVersion: string;
	};

	type RemoteRoot = {
		render: (props: RemoteMountProps) => void;
		unmount: () => void;
	};

	export function mount(container: HTMLElement, props: RemoteMountProps): RemoteRoot;
}
