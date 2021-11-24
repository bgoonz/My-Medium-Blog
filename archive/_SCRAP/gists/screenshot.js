import webdriver from "selenium-webdriver";
import fs from "fs";

const driver = new webdriver.Builder().build();

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

// example usage
driver.saveScreenshot("mypage.png");
