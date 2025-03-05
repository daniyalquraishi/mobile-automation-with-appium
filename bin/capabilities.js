exports.Android12 = {
  automationName: 'UiAutomator2',
  platformName: 'Android',
  platformVersion: '12',
  deviceName: 'Android10',
  app: `${process.cwd()}/app/dev-silk2.apk`,
  clearSystemFiles: true,
  appWaitDuration: 60000,
  fullReset: true,
  language: process.env.LANGUAGE,
  locale: process.env.COUNTRY,
  uiautomator2ServerLaunchTimeout: 60000,
  uiautomator2ServerInstallTimeout: 60000,
  androidInstallTimeout: 60000,
  remoteAppsCacheLimit: 0,
  newCommandTimeout: 450,
};