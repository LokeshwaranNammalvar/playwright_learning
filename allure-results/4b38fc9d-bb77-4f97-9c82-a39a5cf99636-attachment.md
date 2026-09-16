# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning.spec.js >> make my trip
- Location: tests\learning.spec.js:35:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#trainNum')
    - locator resolved to <input readonly type="text" id="trainNum" data-cy="selectTrain" value="Select Train No" class="rsw_inputField font30 latoBlack greyText"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - img "Make My Trip" [ref=e8] [cursor=pointer]
      - list [ref=e9]:
        - listitem [ref=e10] [cursor=pointer]:
          - generic [ref=e13]:
            - paragraph [ref=e14]: List Your Property
            - paragraph [ref=e15]: Grow your business!
        - listitem [ref=e16] [cursor=pointer]:
          - img "myBizLogo" [ref=e18]
          - generic [ref=e19]:
            - paragraph [ref=e20]: Introducing myBiz
            - paragraph [ref=e21]: Business Travel Solution
        - listitem [ref=e22] [cursor=pointer]:
          - generic [ref=e25]:
            - paragraph [ref=e26]: My Trips
            - paragraph [ref=e27]: Manage your bookings
        - listitem [ref=e28] [cursor=pointer]:
          - generic "Wishlist" [ref=e30]
          - generic [ref=e31]:
            - paragraph [ref=e32]: Wishlist
            - paragraph [ref=e33]: Save favourites
        - listitem [ref=e34] [cursor=pointer]:
          - paragraph [ref=e39]: Login or Create Account
    - navigation [ref=e42]:
      - list [ref=e43]:
        - listitem [ref=e44]:
          - link "Flights" [ref=e46] [cursor=pointer]:
            - /url: https://www.makemytrip.com/flights/
        - listitem [ref=e50]:
          - link "Hotels" [ref=e52] [cursor=pointer]:
            - /url: https://www.makemytrip.com/hotels/
        - listitem [ref=e56]:
          - link "Villas & Homestays" [ref=e58] [cursor=pointer]:
            - /url: https://www.makemytrip.com/homestays/
        - listitem [ref=e62]:
          - link "Holiday Packages" [ref=e64] [cursor=pointer]:
            - /url: https://www.makemytrip.com/holidays-india/
        - listitem [ref=e68]:
          - link "Trains" [ref=e70] [cursor=pointer]:
            - /url: https://www.makemytrip.com/railways/
        - listitem [ref=e74]:
          - link "Buses" [ref=e76] [cursor=pointer]:
            - /url: https://www.makemytrip.com/bus-tickets/
        - listitem [ref=e80]:
          - link "Cabs" [ref=e82] [cursor=pointer]:
            - /url: https://www.makemytrip.com/cabs/
        - listitem [ref=e86]:
          - link "Tours & Attractions" [ref=e88] [cursor=pointer]:
            - /url: https://www.makemytrip.com/activities/
        - listitem [ref=e92]:
          - link "Visa" [ref=e94] [cursor=pointer]:
            - /url: https://visa.makemytrip.com/
        - listitem [ref=e98]:
          - link "Cruise" [ref=e100] [cursor=pointer]:
            - /url: https://www.makemytrip.com/cruise/
          - generic [ref=e104]: new
        - listitem [ref=e105]:
          - link "Forex Card & Currency" [ref=e107] [cursor=pointer]:
            - /url: https://www.makemytrip.com/forex/
        - listitem [ref=e111]:
          - link "Travel Insurance" [ref=e113] [cursor=pointer]:
            - /url: https://www.makemytrip.com/travel-insurance/
  - generic [ref=e119]:
    - generic [ref=e121]:
      - generic [ref=e122]:
        - generic [ref=e123] [cursor=pointer]: Book Train Tickets
        - generic [ref=e124] [cursor=pointer]: Check PNR Status
        - generic [ref=e125] [cursor=pointer]: Live Train Status
        - generic [ref=e127]:
          - heading "Live Train Status" [level=1] [ref=e128]
          - paragraph [ref=e129]: IRCTC Authorized e-ticketing
      - generic [ref=e130]:
        - generic [ref=e131]:
          - generic [ref=e133]:
            - generic [ref=e134]: Train Number / Name
            - textbox "Train Number / Name" [ref=e135] [cursor=pointer]: Select Train No
            - paragraph
          - generic [ref=e137]:
            - generic [ref=e138]: Your Stop
            - textbox "Your Stop Select Station (optional)" [ref=e139] [cursor=pointer]
            - paragraph [ref=e141]:
              - generic [ref=e142]: Select Station
              - generic [ref=e143]: (optional)
          - generic [ref=e145]:
            - generic [ref=e146]: Train Start Date
            - textbox "Train Start Date Select date (optional)" [ref=e147] [cursor=pointer]
            - paragraph [ref=e149]:
              - generic [ref=e150]: Select date
              - generic [ref=e151]: (optional)
        - paragraph [ref=e152]:
          - generic: CHECK STATUS
    - main [ref=e153]:
      - main [ref=e154]:
        - generic [ref=e155]:
          - generic [ref=e156]:
            - heading "Offers" [level=2] [ref=e157]
            - list [ref=e159]:
              - listitem [ref=e160]:
                - generic [ref=e161] [cursor=pointer]: Trains
              - listitem [ref=e163]:
                - generic [ref=e164] [cursor=pointer]: All Offers
              - listitem [ref=e166]:
                - generic [ref=e167] [cursor=pointer]: Hotels
              - listitem [ref=e169]:
                - generic [ref=e170] [cursor=pointer]: Flights
              - listitem [ref=e172]:
                - generic [ref=e173] [cursor=pointer]: Holidays
              - listitem [ref=e175]:
                - generic [ref=e176] [cursor=pointer]: Bus
              - listitem [ref=e178]:
                - generic [ref=e179] [cursor=pointer]: Cabs
              - listitem [ref=e181]:
                - generic [ref=e182] [cursor=pointer]: Bank Offers
            - generic [ref=e184] [cursor=pointer]: View All
          - generic [ref=e187]:
            - button "Previous" [ref=e188] [cursor=pointer]
            - generic [ref=e190]:
              - generic [ref=e191]:
                - generic [ref=e194] [cursor=pointer]:
                  - generic [ref=e199]:
                    - paragraph [ref=e201]:
                      - generic [ref=e202]: T&C's Apply
                    - paragraph [ref=e203]: Best Deals for the Upcoming Long Weekends
                    - paragraph [ref=e205]: Grab Up to 40% OFF* on Trips.
                  - generic [ref=e206]: Book Now
                - generic [ref=e211] [cursor=pointer]:
                  - generic [ref=e216]:
                    - paragraph [ref=e218]:
                      - generic [ref=e219]: T&C's Apply
                    - paragraph [ref=e220]: "For Your Diwali Trip: Cancel Train Ticket at ₹0*."
                    - paragraph [ref=e222]: Get Free Cancellation on trains at no additional cost.
                  - generic [ref=e223]: BOOK NOW
              - generic [ref=e226]:
                - generic [ref=e229] [cursor=pointer]:
                  - generic [ref=e234]:
                    - paragraph [ref=e236]:
                      - generic [ref=e237]: T&C's Apply
                    - paragraph [ref=e238]: "For You: Up to ₹40 OFF*"
                    - paragraph [ref=e240]: on Train Bookings.
                  - generic [ref=e241]: BOOK NOW
                - generic [ref=e246] [cursor=pointer]:
                  - generic [ref=e251]:
                    - paragraph [ref=e253]:
                      - generic [ref=e254]: T&C's Apply
                    - paragraph [ref=e255]: Special Deal on Trains for MMTBLACK Members.
                    - paragraph [ref=e257]: "Up to ₹500 OFF* on Alternate Trip Plan or Free Cancellation. Code: MMTBLACK."
                  - generic [ref=e258]: BOOK NOW
              - generic [ref=e261]:
                - generic [ref=e264] [cursor=pointer]:
                  - generic [ref=e269]:
                    - paragraph [ref=e271]:
                      - generic [ref=e272]: T&C's Apply
                    - paragraph [ref=e273]: Aadhaar-based Authentication on IRCTC’s Platform
                    - paragraph [ref=e275]: Now Mandatory for Tatkal Train Bookings.
                  - generic [ref=e276]: BOOK NOW
                - generic [ref=e281] [cursor=pointer]:
                  - generic [ref=e286]:
                    - paragraph [ref=e288]:
                      - generic [ref=e289]: T&C's Apply
                    - paragraph [ref=e290]: "INTRODUCING: Seat Availability Forecast"
                    - paragraph [ref=e292]: and Sold-out Alerts for train bookings.
                  - generic [ref=e293]: BOOK NOW
            - button "Next" [ref=e296] [cursor=pointer]
        - main [ref=e298]
    - main [ref=e302]:
      - generic [ref=e304]:
        - generic [ref=e306]:
          - paragraph [ref=e307]
          - paragraph [ref=e308]
        - generic [ref=e309] [cursor=pointer]
      - main [ref=e311]:
        - generic [ref=e313]:
          - generic [ref=e315]:
            - paragraph [ref=e316]
            - paragraph [ref=e317]
          - generic [ref=e318] [cursor=pointer]
        - link [ref=e324] [cursor=pointer]:
          - /url: "#"
          - generic [ref=e325]:
            - generic [ref=e329]:
              - paragraph [ref=e330]
              - paragraph [ref=e331]
              - paragraph [ref=e333]
              - paragraph [ref=e334]
            - paragraph [ref=e335]
          - generic [ref=e336]:
            - generic [ref=e340]:
              - paragraph [ref=e341]
              - paragraph [ref=e342]
              - paragraph [ref=e344]
              - paragraph [ref=e345]
            - paragraph [ref=e346]
          - generic [ref=e347]:
            - generic [ref=e351]:
              - paragraph [ref=e352]
              - paragraph [ref=e353]
              - paragraph [ref=e355]
              - paragraph [ref=e356]
            - paragraph [ref=e357]
  - contentinfo [ref=e358]:
    - generic [ref=e362]:
      - generic [ref=e363]:
        - link [ref=e364] [cursor=pointer]:
          - /url: https://www.instagram.com/makemytrip/
        - link [ref=e366] [cursor=pointer]:
          - /url: https://x.com/makemytrip
        - link [ref=e368] [cursor=pointer]:
          - /url: https://in.linkedin.com/company/makemytrip.com?open=outside
        - link [ref=e370] [cursor=pointer]:
          - /url: https://www.facebook.com/makemytrip/
      - paragraph [ref=e373]: © 2026 MakeMyTrip (India) Limited
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
  36 |   await page.goto('https://www.makemytrip.com/');
  37 |   try{
  38 |   await page.locator('//span[@class="commonModal__close"]').click();
  39 |   } catch(error)
  40 |   {
  41 |     console.log("popup not displayed");
  42 |   }
  43 |   await page.locator('.chNavIcon.appendBottom2.chSprite.chTrains.inactive').click();
  44 |   await page.locator('//span[text()="Live Train Status"]').click();
> 45 |   await page.locator('#trainNum').click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  46 |   await page.locator('react-autosuggest__input react-autosuggest__input--open').fill("12164");
  47 |   await page.locator("//span[text()='12164']").click();
  48 |   await page.waitForTimeout(3000);
  49 | })
  50 | 
  51 | test('instragram', async({page}) =>{
  52 |   await page.goto("https://www.instagram.com/");
  53 |   await page.getByPlaceholder("Mobile number, username or email").click();
  54 | })
```