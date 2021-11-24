import webdriver from "selenium-webdriver";
import fs from "fs";

const driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.phantomjs())
  .build();

webdriver.WebDriver.prototype.saveScreenshot = filename => {
  return driver.takeScreenshot().then(data => {
    fs.writeFile(
      filename,
      data.replace(/^data:image\/png;base64,/, ""),
      "base64",
      err => {
        if (err) throw err;
      }
    );
  });
};

webdriver.By.sizzle = selector => {
  driver
    .executeScript("return typeof Sizzle==='undefined'")
    .then(noSizzle => {
      if (noSizzle)
        driver.executeScript(
          fs.readFileSync("sizzle.min.js", { encoding: "utf8" })
        );
    });
  return new webdriver.By.js(
    `return Sizzle('${selector.replace(/"/g, '\\"')}')[0]`
  );
};

driver.get("http://google.com/");
driver.findElement({ sizzle: "input[name=q]" }).sendKeys("cheese\n");
driver.saveScreenshot("cheese.png");
driver.quit();
