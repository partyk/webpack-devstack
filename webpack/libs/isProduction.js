const argv = require('minimist')(process.argv.slice(2));

module.exports = _ => argv.env === 'production';