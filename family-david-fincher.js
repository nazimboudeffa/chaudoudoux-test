const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('http://chaudoudoux.ml/families/add');
    await driver.findElement(By.name('input-family-code')).sendKeys('M00004');
    await driver.findElement(By.name('input-allocation-number')).sendKeys('123456789');
    await driver.findElement(By.name('input-firstname-parent-father')).sendKeys('David');
    await driver.findElement(By.name('input-lastname-parent-father')).sendKeys('Fincher');
    await driver.findElement(By.id('add-child')).click();
    await driver.findElement(By.name('input-lastname-child_1')).sendKeys('Fincher');
    await driver.findElement(By.name('input-firstname-child_1')).sendKeys('Phelix');
    await driver.findElement(By.name('btn-validate')).click();
    await driver.wait(until.titleIs('added'), 1000);
  } finally {
    await driver.quit();
  }
})();
