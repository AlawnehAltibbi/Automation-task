import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

// Define the configuration object
export const config = {
    ...baseConfig,
    hostname: 'mobile-hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 13 Pro',
        'appium:platformVersion': '17.4',
        'appium:orientation': 'PORTRAIT',

        'appium:app': 'https://mobile-hub.lambdatest.com/beta/APP10160471181716453019663550',

        'appium:autoGrantPermissions': true,


        'appium:protocol': 'http',
        'appium:hostname': 'mobile-hub.lambdatest.com',
        'appium:path': '/wd/hub',
        'appium:maxInstances': 1,

        'appium:build': '6454',
        'lt:options': { // LambdaTest-specific options
            user: 'mohammad.alawneh', // Add your LambdaTest username here
            accessKey: 'up4zrQP0j6BX8ykSYXDKk57RrBkNzuiCFvxfHJFzkZSx20Ku6d',
        }
    }],
    specs: [
        '/Users/altibbi/Desktop/appium-boilerplate/tests/specs/android/LoginUserApp.spec.js'
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
};
