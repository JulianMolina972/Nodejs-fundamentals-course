const puppeteer = require('puppeteer');

(async () => {
  console.log('We launch browser');
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js')  

  let title1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML;
  })
  console.log(title1);
  console.log('We closed browser');
  browser.close();
  console.log('Browser closed');
})();