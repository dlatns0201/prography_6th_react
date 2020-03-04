/* eslint-disable func-names */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
module.exports = function(env) {
	return require(`./webpack.${env}.js`);
};
