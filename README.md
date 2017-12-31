Coverage through Webpack.
Today I m going to Walk you through the code coverage generation from the example Based of Angular documentation.https://angular.io/tutorial

I made a github repository of the project mentioned in angular documentation and it is https://github.com/HAL90012017/AngularUnitTestCoverage

After the app has been set up in local and running.

Step 1: Add The following packages to packages.json

We will be using “istanbul-instrumenter-loader”, its a node module package which is available through npm install istanbul-instrumenter-loader.


The above mentioned change is available on branch step-1

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-1

Step 2 : Add a Rule To Webpack.test.js
Once you have this module installed successfully we need to configure the module with webpack with a rule with enforce attribute as post to go through files and generate the code coverage as shown below.

The above mentioned change is available on branch step-2

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-2

Step 3: karma.conf.js
we can configure the app with karma.conf.js.

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-3

Step-4: Karma-test-shim.js
Finally we arrived at Step-4 where we tell the webpack the entry point of the all project ts files with the following lines.

karma-test-shim.js, is basically a root file which encompasses all the entry point of file that we tell the webpack to compile the files and if you find any files with .ts , Supply them to webpack.test.js

The above mentioned change is available on branch step-4

you will be able to see unit test coverage generated for each file


Viola Done!. please let me know what you think.

https://github.com/HAL90012017/AngularUnitTestCoverage/tree/step-4
