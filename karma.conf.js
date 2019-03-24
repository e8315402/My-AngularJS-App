var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = undefined;
webpackConfig.plugins = undefined;
webpackConfig.watch = undefined;

// Karma configuration
// Generated on Sat Dec 01 2018 18:44:27 GMT+0800 (GMT+08:00)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: 'node_modules/angular/angular.js', watched: false },
      { pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false },
      'src/app/**/*.module.js',
      'src/app/**/*.service.js',
      'src/app/**/*.directive.js',
      'src/app/**/*.component.js',
      'src/app/**/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/app/**/*.module.js': ['webpack', 'sourcemap'],
      'src/app/**/*.service.js': ['webpack', 'sourcemap'],
      'src/app/**/*.directive.js': ['webpack', 'sourcemap'],
      'src/app/**/*.component.js': ['webpack', 'sourcemap'],
    },

    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies
    webpack: webpackConfig,

    // webpack-dev-middleware configuration
    webpackMiddleware: {
      stats: 'minimal',
      logLevel: 'warn'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromiumNoSandbox'],

    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 2,
    browserNoActivityTimeout: 10000,

    customLaunchers: {
      ChromiumNoSandbox: {
        base: 'ChromiumHeadless',
        flags: [
          '--no-sandbox'
        ]
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    client: {
      // Capture all console output and pipe it to the terminal.
      captureConsole: false
    }
  })
}
