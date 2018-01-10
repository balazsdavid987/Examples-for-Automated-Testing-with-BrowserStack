nightwatch_config = {
  src_folders : [ 'tests' ],
  selenium : {
    'start_process' : false,
    'host' : 'hub-cloud.browserstack.com',
    'port' : 80
  },
  common_capabilities: {
    'project':           'BudaCodeContactPage',
    'build':             'ParallelTestsExample',
    'browserstack.user': 'balazsdavid2',
    'browserstack.key':  'hE15iRDCzjppp7tZxLpK',
    'browserstack.debug': true
  },
  test_settings: {
    default: {},
    'WindowsXP-IE7': {
      desiredCapabilities: {
        'browserName':     'IE',
        'browser_version': '7.0',
        'os':              'Windows',
        'os_version':      'XP',
        'resolution':      '1024x768'
      }
    },
    'Windows7-Firefox55': {
      desiredCapabilities: {
        'browserName':     'Firefox',
        'browser_version': '55.0',
        'os':              'Windows',
        'os_version':      '7',
        'resolution':      '1280x800'
      }
    },
    'Windows10-Chrome63': {
      desiredCapabilities: {
        'browserName':     'Chrome',
        'browser_version': '63.0',
        'os':              'Windows',
        'os_version':      '10',
        'resolution':      '1366x768'
      }
    },
    'OSX-SL-Safari5': {
      desiredCapabilities: {
        'browserName':     'Safari',
        'browser_version': '5.1',
        'os':              'OS X',
        'os_version':      'Snow Leopard',
        'resolution':      '1920x1080'
      }
    },
    'Android4-GalaxyTab4': {
      desiredCapabilities: {
        'browserName':     'android',
        'device':          'Samsung Galaxy Tab 4',
        'realMobile':      'true',
        'os_version':      '4.4'
      }
    },
    'iOS10-iPhone7': {
      desiredCapabilities: {
        'browserName':     'iPhone',
        'device':          'iPhone 7',
        'realMobile':      'true',
        'os_version':      '10.3'
      }
    }
  }
};

for(var i in nightwatch_config.test_settings) {
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
  config['desiredCapabilities'] = config['desiredCapabilities'] || {};

  for(var j in nightwatch_config.common_capabilities) {
    config['desiredCapabilities'][j] = config['desiredCapabilities'][j] ||
      nightwatch_config.common_capabilities[j];
  }
}

module.exports = nightwatch_config;
