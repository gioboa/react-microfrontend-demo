const {
  withNativeFederation,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "remote",
  exposes: {
    "./remote-app": "./src/App.tsx"
  },
  shared: {},
});

