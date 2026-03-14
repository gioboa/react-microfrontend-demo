import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
	server: { fs: { allow: ['.', '../shared'] } },
	build: {
		target: 'chrome89',
	},
	plugins: [
		federation({
			dts: false,
			name: 'host',
			remotes: {
				remote: {
					type: 'module',
					name: 'remote',
					entry: 'http://localhost:4174/remoteEntry.js',
					entryGlobalName: 'remote',
				},
			},
			exposes: {},
			filename: 'remoteEntry.js',
		}),
		react(),
	],
}));
