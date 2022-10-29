const {
  withNativeFederation,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "host",
  shared: {},
});