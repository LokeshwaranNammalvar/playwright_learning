import {test} from '@playwright/test'

// test('login test', async({page}) => {
//   await page.goto('https://demoqa.com/text-box');
//   await page.locator('#userName').fill("Loke");
//   await page.locator('#userEmail').fill("lokeshalvar@gmail.com");
//   await page.locator('#currentAddress').fill("poonamalle 600053");
//   await page.locator('#permanentAddress').fill("cuddalore 607105");
//   await page.getByRole("button", {name : "Submit"}).click();
//   await page.screenshot({
//     path: 'full-screenshot-age.png',
//     fullPage: true
//   });
// // })

// test('college acc', async({page}) => {
//   await page.goto('https://student.sairamit.edu.in/sign-in');
//   await page.getByPlaceholder("Email").fill("SIT22CO3@sairamtap.edu.in");
//   await page.getByPlaceholder("*********").fill("Lokesh_(Alvar)_29?");
//   await page.getByRole("button", {name : "Log In"}).click();
// })

// test('radio button ', async({page}) => {
//   await page.goto('https://edumate.sairamit.edu.in/');
//   await page.getByLabel("Student").click();
//   await page.getByRole("button",{name : "Click here for student login"}).click();
//   await page.getByPlaceholder("Email").fill('sit22co031@sairamtap.edu.in');
//   await page.getByPlaceholder("*********").fill("Lokesh_(Alvar)_29?");
//   await page.getByRole("button", {name : "Log In"}).click();
//   // await page.getByText("Hall Ticket").click();
//   // await page.locator('.font-inter').click();
//   const [downloaded] = await Promise.all([
//     page.waitForEvent('download'),
//     page.getByText('Hall Ticket').click()
// ]);

// await downloaded.saveAs(
//     './Download/' + await downloaded.suggestedFileName()
// );
// })

// test('options learning', async({page}) => {
//   await page.goto('https://demoqa.com/');
//   await page.getByText('Widgets').click();
//   await page.getByText('Select Menu').click();
//   await page.locator('oldSelectMenu').selectOption({ index: 2});
// })

// test('alerts', async({page}) => {
//   await page.goto('https://demoqa.com/alerts');
//   page.on("dialog", async dialog => {
//     if(dialog.type()=='alert'){
//     console.log(dialog.type())
//     await dialog.accept();
//     }

//   });
//   await page.locator('#alertButton').click();
// await page.locator("#searchDropdownBox").selectOption("search-alias=amazon-devices");
// })

// test('button', async({page}) => {
//   await page.goto('https://student.sairamit.edu.in/sign-in');
//   await page.getByPlaceholder('Email').fill("sit22co031@sairamtap.edu.in");
//   await page.getByPlaceholder('*********').fill("Lokesh_(Alvar)_29?");
//   await locator.press("Enter");
//   await page.waitForTimeout(4000);
// })

// test('drop down button', async({page}) => {
//   await page.goto('https://www.amazon.in/');
//   await page.locator("#searchDropdownBox").selectOption({
//         label: "Amazon Fresh Meat"
//     });
//   await page.screenshot({
//     path: 'screenshot.png'
//   })
// })

// test('select option', async({page}) => {
//   await page.goto('https://demoqa.com/select-menu');
//   // await page.locator('#oldSelectMenu').selectOption("3");
//   // await page.locator("#oldSelectMenu").selectOption({ label : "White"})
//   await page.locator("#oldSelectMenu").selectOption({index: 5});
// })

// test('option testing', async({page})=>{
//   await page.goto("https://www.amazon.in/");
//   // await page.locator(".nav-search-dropdown").selectOption("search-alias=todays-deals");
//   // await page.getByRole('button', {name: 'Expand Account and Lists'}).click();
//   await page.getByText('Hotels').click();
// })

// test('alerts', async({page})=>{
//   await page.goto('https://demoqa.com/alerts');
//   await page.locator('#alertButton').click();
//   page.on('dialog',async dialog => {
//     await dialog.accept();
//   })
// })

// test('mouse action', async({page}) => {
//   await page.goto('https://demoqa.com/buttons');
//   // await page.locator('#kcEDj').click();
//   // await page.getByRole('button', { name: 'Click Me', exact:true }).click();
//   // await page.getByText('Click Me',{exact:true}).click();
//   await page.getByText('Double Click Me').dblclick();
//   await page.getByText('Right Click Me').click({button : 'right'});
// })

// test('mouse actions', async({page}) => {
//   await page.goto('https://vinothqaacademy.com/mouse-event/');
//   await page.locator('#doubleBtn').dblclick();
//   await page.locator('#rightBtn').click({button:'right'});
//   await page.locator('#dragItem').dragTo(
//     page.locator('#dropZone')
// );
// await page.mouse.move(500, 300);
// await page.waitForTimeout(5000);
// })

// test('keyboard action', async({page}) => {
//   await page.goto('https://www.amazon.in/');
//   await page.getByPlaceholder("Search Amazon.in").fill("iphone 17")
//   await page.getByPlaceholder('Search Amazon.in').press('Control+A');
//   await page.getByPlaceholder("Search Amazon.in").fill("iphone 16")
//   await page.getByPlaceholder("Search Amazon.in").press('Enter');
//   await page.waitForTimeout(5000);
//   // console.log(page.url());
//   // await page.keyboard.press('Control+A');
// })

// test('drop down button ', async({page}) => {
//   await page.goto('https://demoqa.com/select-menu');
//   await page.locator('#oldSelectMenu').selectOption({index : 5});
//   await page.waitForTimeout(3000);
// })

// test('alert button', async({page}) => {
//   await page.goto('https://demoqa.com/alerts');

//   await page.locator('#alertButton').click();
//   page.on('dialog', async dialog => {
//   console.log(dialog.message());
//   await dialog.dismiss();
//   await page.waitForLoadState();
// });

//   await page.locator('#confirmButton').click();
//   page.on('dialog', async dialog => {
//   console.log(dialog.message());
//   await dialog.accept();
//   await page.waitForLoadState();
// });

//   await page.locator('#promtButton').click();
//   page.on('dialog', async dialog => {
//     console.log(dialog.message());
//     await dialog.accept('Murugaaa');
//     await page.waitForLoadState();
//   })

//   await page.locator('#click').click();
//   page.on('dialog', async dialog =>{
//     console.log(dialog.message());
//     await dialog.accept();
//   })
// })

// test('form', async({page}) => {
//   await page.goto('https://demoqa.com/automation-practice-form');
//   await page.locator('#firstName').fill("lokesh");
// })

// test('table', async ({page}) => {
//   await page.goto('https://assertqa.com/practice/webtables');
//   const table = await page.locator('#table-scroll-container').locator('td').nth(1);
  // const table2 = await page.locator('#table-scroll-container');
  // console.log(await table.textContent());
//   console.log(await table.allInnerTexts());
// })