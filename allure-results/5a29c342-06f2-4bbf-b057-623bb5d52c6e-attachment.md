# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning.spec.js >> make my trip
- Location: tests\learning.spec.js:35:5

# Error details

```
Error: page.goto: Stream error in the HTTP/2 framing layer
Call log:
  - navigating to "https://www.makemytrip.com/?msockid=0fb1ea2dedc8610f1f49fc72ecb760f5", waiting until "load"

```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | 
  3  | // test('inbuild fixtures', async({browser}) => {
  4  | //   const context = await browser.newContext();
  5  | //   const page = await context.newPage();
  6  | //   await page.goto('https://www.flipkart.com/');
  7  | 
  8  | //   const context2 = await browser.newContext();
  9  | //   const page3 = await context2.newPage();
  10 | //   await page3.goto('https://demoqa.com/webtables');
  11 |   
  12 | //   const context3 = await browser.newContext({
  13 | //     recordVideo : {
  14 | //       dir :'./videos/'
  15 | //     }
  16 | //   });
  17 | 
  18 | //   const page4 = await context3.newPage();
  19 | //   await page4.goto('https://assertqa.com/practice/webtables');
  20 | //   const page5 = await context3.newPage();
  21 | //   await page5.goto('https://www.amazon.in/');
  22 |   
  23 | //   await page5.locator('#twotabsearchtextbox').fill('samsung s26 ultra 5g mobile');
  24 | //   await page5.locator('#nav-search-submit-button').click();
  25 | // })
  26 | 
  27 | // test('learning XPath', async({page}) => {
  28 | //   await page.goto('https://www.amazon.in/');
  29 | //   await page.locator('[id="twotabsearchtextbox"]').fill('samsung s25 ultra 5g mobile');
  30 | //   await page.locator('#nav-search-submit-button').click();
  31 | //   // await page.waitForTimeout(2000);
  32 | //   // page.locator('//h2[contains(@aria-label,"Galaxy S26 Ultra 5G")][1]').click();
  33 | // })
  34 | 
  35 | test('make my trip', async({page}) => {
> 36 |   await page.goto('https://www.makemytrip.com/?msockid=0fb1ea2dedc8610f1f49fc72ecb760f5');
     |              ^ Error: page.goto: Stream error in the HTTP/2 framing layer
  37 |   try{
  38 |   await page.locator('//span[@class="commonModal__close"]').click();
  39 |   } catch(error)
  40 |   {
  41 |     console.log("popup not displayed");
  42 |   }
  43 |   await page.locator('.chNavIcon.appendBottom2.chSprite.chTrains.inactive').click();
  44 | 
  45 | })
```