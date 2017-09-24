var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config;
    _config = {
        basePath: '',

        frameworks: ['jasmine'],
        files: [
            {pattern: './config/karma-test-shim.js', watched: false}
        ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack']
    },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            type: 'in-memory'
        },

        remapCoverageReporter: {
            'text-summary': null,
            json: './coverage/coverage.json',
            html: './coverage/html'

        },
        reporters: ['mocha', 'coverage', 'remap-coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    };

  config.set(_config);
};
