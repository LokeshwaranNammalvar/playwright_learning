import {test} from '@playwright/test';


test('make my trip', async({page}) => {
  await page.goto('https://www.makemytrip.com/');
  try{
  await page.locator('//span[@class="commonModal__close"]').click();
  } catch(error)
  {
    console.log("popup not displayed");
  }
  await page.locator('.chNavIcon.appendBottom2.chSprite.chTrains.inactive').click();
  await page.locator('//span[text()="Live Train Status"]').click();
  await page.locator('#trainNum').click();
  await page.locator("//input[contains(@class,'react-autosuggest__input')]").fill("22675");
  await page.locator("//span[text()='22675']").click();
  await page.locator("//span[text()='Select Station']").click();
  await page.locator("//ul//li//span[text()='Cuddalore Port']").click();
  await page.locator("#travelDate").click();
  await page.locator("//ul//li//span[text()='Tomorrow']").click();
  await page.waitForTimeout(3000);
})
