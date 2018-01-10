const { Builder, By, Key, until } = require('selenium-webdriver');

var capabilities = {
  'browserName':       'Chrome',
  'browser_version':   '63.0',
  'os':                'Windows',
  'os_version':        '10',
  'resolution':        '1280x800',
  'project' :          'BudaCodeContactPage',
  'browserstack.user': 'balazsdavid2',
  'browserstack.key':  'hE15iRDCzjppp7tZxLpK',
  'browserstack.debug': true
};

// Elindítjuk a tesztet a BrowserStack Selenium Grid-jén
var driver = new Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.budacode.com/contact');

const submitButton = driver.findElement(By.id('submitForm'));
const closeButton = driver.findElement(By.id('closeModal'));

// A sleep-nek itt most csak annyi a szerepe hogy jobban követhető a felvétel
// ha van egy kis szünet a lépések között)

driver.sleep(1000);
submitButton.click();

driver.findElement(By.id('message')).getAttribute('innerHTML').then(value => {
  console.log(value);
});

driver.sleep(1000);
closeButton.click();

driver.findElement(By.id('name')).sendKeys('BrowserStack Automated Test');

driver.sleep(1000);
submitButton.click();

driver.findElement(By.id('message')).getAttribute('innerHTML').then(value => {
  console.log(value);
});

driver.sleep(3000);

// Kilépünk a tesztből
driver.quit();
