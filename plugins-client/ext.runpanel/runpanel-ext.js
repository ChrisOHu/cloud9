module.exports = function setup(options, imports, register) {
    imports["client-plugins"].register("runpanel", __dirname, register);
};