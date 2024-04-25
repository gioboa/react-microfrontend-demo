const { withNativeFederation, shareAll } = require('@softarc/native-federation/build');

module.exports = withNativeFederation({
	name: 'remote',
	exposes: {
		'./remote-app': './src/App.tsx',
	},
	skip: ['react-dom/server', 'react-dom/server.node', 'vite-react-microfrontends'],
});
