const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://chaudoudoux.ml/candidates/add');
    await driver.findElement(By.name('input-name')).sendKeys('Claude');
    await driver.findElement(By.name('input-firstname')).sendKeys('Jade');
    await driver.findElement(By.name('btn-validate')).click();
    await driver.wait(until.titleIs('added'), 1000);
  } finally {
    await driver.quit();
  }
})();
