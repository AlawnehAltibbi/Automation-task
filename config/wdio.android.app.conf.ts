import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '/Users/altibbi/Desktop/appium-boilerplate/tests/specs/LoginUserApp.spec.js',
    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'Android',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here

            //
            // NOTE: Change this name according to the Emulator you have created on your local machine
            'appium:deviceName': 'Pixel 6',
            //
            // NOTE: Change this version according to the Emulator you have created on your local machine
            'appium:platformVersion': '13',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'UiAutomator2',
            // The path to the app
            'appium:app': join(
                process.cwd(),
                'app/android/app-release (2).apk',
                //
                // NOTE: Change this name according to the app version you downloaded

            ),
            ///'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',

            'appium:newCommandTimeout': 140,
            'appium:autoGrantPermissions': true,
            'appium:skipServerInstallation': true,
            'appium:disableWindowAnimation': true,
            'appium:autoLaunch': true, // Ensure this is true
           'appium:waitForIdleTimeout': 100
        },
    ],



};

