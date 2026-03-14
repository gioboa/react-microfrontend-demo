import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(() => {
	return {
		server: {
			fs: {
				allow: ['.', '../shared'],
			},
		},
		build: {
			target: 'chrome89',
		},
		plugins: [
			federation({
				dts: false,
				filename: 'remoteEntry.js',
				name: 'remote',
				exposes: {
					'./mount': './src/mount.tsx',
				},
				remotes: {},
			}),
			react(),
		],
	};
});
