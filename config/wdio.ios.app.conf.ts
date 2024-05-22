import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '/Users/altibbi/Desktop/appium-boilerplate/tests/specs/android/LoginUserApp.spec.js', // Update path to your iOS test specs
    ],

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'iOS',
            maxInstances: 1,
            // For W3C the appium capabilities need to have an extension prefix
            // This is `appium:` for all Appium Capabilities which can be found here

            //
            // NOTE: Change this name according to your real device
            'appium:deviceName': 'iPhone 14 Pro', // Update device name to your iOS device name
            //
            // NOTE: Change this version according to your real device
            'appium:platformVersion': '17.4', // Update platform version to your iOS version
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            // The path to the app
            'appium:app': join(
                process.cwd(),
                'app/IOS/user_app.app', // Update the path to your iOS app
            ),
            'appium:newCommandTimeout': 140,
            'appium:autoGrantPermissions': true,
            'appium:skipServerInstallation': true,
            'appium:disableWindowAnimation': true,
            'appium:autoLaunch': true,
            'appium:waitForIdleTimeout': 100,
            'appium:udid': 'your_device_udid', // Add your device's UDID here
        },
    ],
};
