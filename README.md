Coverage through Webpack.
While Setting up Unit test case coverage at the my work place, I had come across where Minimum Amount of documentation or Tutorial walking through the Unit test code coverage generation, So Today I m going to Walk you through the code coverage generation from the example Based of Angular documentation.https://angular.io/tutorial

I made a github repository of the project mentioned in angular documentation and it is https://github.com/HAL90012017/AngularUnitTestCoverage

After the app has been set up in local and running.

Step 1: Add The following packages to packages.json
"karma-coverage": "^1.1.1",
"istanbul-instrumenter-loader": "2.0.0",
"karma-coverage-istanbul-reporter": "^1.3.0",
"karma-mocha-reporter": "^2.2.3",
"karma-remap-coverage": "^0.1.4"
Do an npm install, it will fetch the packages and place it in your node_modules.

We will be using “istanbul-instrumenter-loader”, its a node module package which is available through npm install istanbul-instrumenter-loader.


The above mentioned change is available on branch step-1

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-1

Step 2 : Add a Rule To Webpack.test.js
Once you have this module installed successfully we need to configure the module with webpack with a rule with enforce attribute as post to go through files and generate the code coverage as shown below.

/**
 * Instruments JS files with Istanbul for subsequent code coverage reporting.
 * Instrument only testing sources.
 *
 * See: https://github.com/deepsweet/istanbul-instrumenter-loader
 */
{
    enforce: 'post',
    test: /\.ts$/,
    loader: 'istanbul-instrumenter-loader',
    include: helpers.root('src', 'app'),
    exclude: /(node_modules|app\\spec)/,
}
inculde is the important attribute where you let istanbul-instumenter-loader all your app files reside in, this helps istanbul-instumenter-loader to go through each file and form the percentage of the file that came under Coverage.

The above mentioned change is available on branch step-2

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-2

Step 3: karma.conf.js
we can configure the app with karma.conf.js as shown below.

var webpackConfig = require('./webpack.test');
module.exports = function (config) {
  var _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: './config/karma-test-shim.js', watched: false}
    ],
    preprocessors: {
      './config/karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true
  };
  config.set(_config);
};
Adding Coverage Reporter and remapCoverageReporter will create a coverage folder with index.html which contains all the Cumulative percentage of the total file coverage and make a line change for as shown below

reporters: [‘mocha’, ‘coverage’, ‘remap-coverage’]

coverageReporter: {
    type: 'in-memory'
},

remapCoverageReporter: {
    'text-summary': null,
    json: './coverage/coverage.json',
    html: './coverage/html'

},As you see we have zero unit test case at this point, but we wouldn’t like to know what is our unit test coverage for each file we have.
reporters: ['mocha', 'coverage', 'remap-coverage'],
The above mentioned change is available on branch step-3

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-3

Step-4: Karma-test-shim.js
Finally we arrived at Step-4 where we tell the webpack the entry point of the all project ts files with the following lines.

karma-test-shim.js, is basically a root file which encompasses all the entry point of file that we tell the webpack to compile the files and if you find any files with .ts , Supply them to webpack.test.js

var appContext = require.context('../src/app/', true, /\.ts/);
appContext.keys().map(appContext);
This is the important step and often the boiler plate karma-test-shim.js comes with below mentioned configuration which will only generate the code coverage for files which have corresponding spec.

var appContext = require.context('../src', true, /\spec/\.ts/);
appContext.keys().map(appContext);
The above mentioned change is available on branch step-4

you will be able to see unit test coverage generated for each file


Viola Done!. please let me know what you think.

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-4
