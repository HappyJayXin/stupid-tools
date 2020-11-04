const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath:
			'/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://10minutemail.net/');
	await page.click('#copy-button');
	while (true) {
		await page.waitFor(1000 * 60 * 10 - 1000);
		await page.click('a[href*="more"]');
	}
})();
