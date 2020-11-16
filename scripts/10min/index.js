const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto('https://10minutemail.net/');
  await page.click('#copy-button');

  setInterval(async () => {
    const timeElement = await page.$('#time');
    if (timeElement) {
      const time = await page.evaluate((element) => element.textContent, timeElement);
      const timeNum = +time.split(':').join('');
      if (timeNum <= 10) {
        await page.click('a[href*="more"]');
      }
    }
  }, 1000);
})();
