module.exports = {
  'BudaCode Automated Test Example': function (browser) {
    browser
      .url('http://www.budacode.com/contact')
      .waitForElementVisible('body', 1000)
      .click('button[id=submitForm]')
      .assert.containsText('#message', 'Are you sure?\nCheck your name again please.')
      .click('button[id=closeModal]')
      .setValue('input[type=text]', 'BrowserStack Automated Test')
      .click('button[id=submitForm]')
      .assert.containsText('#message', 'Are you sure?\nCheck your email again please.')
      .end();
  }
};
