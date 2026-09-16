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
  - waiting for locator('//span[text()=\'12164\']')

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
          - generic [ref=e132]:
            - generic [ref=e133]:
              - generic [ref=e134]: Train Number / Name
              - textbox "Train Number / Name" [ref=e135] [cursor=pointer]: Select Train No
              - paragraph
            - combobox [expanded] [ref=e137]:
              - textbox [active] [ref=e138]: "22675"
              - listbox [ref=e139]:
                - generic [ref=e140]:
                  - paragraph [ref=e142]: SUGGESTIONS
                  - listbox [ref=e143]:
                    - option "22675 MS-TPJ CHOLAN SF EXP" [ref=e144] [cursor=pointer]:
                      - generic [ref=e145]:
                        - paragraph [ref=e146]:
                          - generic [ref=e147]: "22675"
                        - paragraph [ref=e148]: MS-TPJ CHOLAN SF EXP
                    - option "22670 PNBE-ERS SF EXP" [ref=e149] [cursor=pointer]:
                      - generic [ref=e150]:
                        - paragraph [ref=e151]:
                          - generic [ref=e152]: "22670"
                        - paragraph [ref=e153]: PNBE-ERS SF EXP
                    - option "22671 MS-MDU TEJAS SF EXP" [ref=e154] [cursor=pointer]:
                      - generic [ref=e155]:
                        - paragraph [ref=e156]:
                          - generic [ref=e157]: "22671"
                        - paragraph [ref=e158]: MS-MDU TEJAS SF EXP
                    - option "22672 MDU-MS TEJAS EXP" [ref=e159] [cursor=pointer]:
                      - generic [ref=e160]:
                        - paragraph [ref=e161]:
                          - generic [ref=e162]: "22672"
                        - paragraph [ref=e163]: MDU-MS TEJAS EXP
                    - option "22673 BGKT-MQ SF EXP" [ref=e164] [cursor=pointer]:
                      - generic [ref=e165]:
                        - paragraph [ref=e166]:
                          - generic [ref=e167]: "22673"
                        - paragraph [ref=e168]: BGKT-MQ SF EXP
                    - option "22674 MQ-BGKT SF SPL" [ref=e169] [cursor=pointer]:
                      - generic [ref=e170]:
                        - paragraph [ref=e171]:
                          - generic [ref=e172]: "22674"
                        - paragraph [ref=e173]: MQ-BGKT SF SPL
                    - option "22676 TPJ-MS CHOLAN SF EXP" [ref=e174] [cursor=pointer]:
                      - generic [ref=e175]:
                        - paragraph [ref=e176]:
                          - generic [ref=e177]: "22676"
                        - paragraph [ref=e178]: TPJ-MS CHOLAN SF EXP
                    - option "22677 YPR-KCVL AC EXPRESS" [ref=e179] [cursor=pointer]:
                      - generic [ref=e180]:
                        - paragraph [ref=e181]:
                          - generic [ref=e182]: "22677"
                        - paragraph [ref=e183]: YPR-KCVL AC EXPRESS
                    - option "22678 KCVL-YPR SF EXPRESS" [ref=e184] [cursor=pointer]:
                      - generic [ref=e185]:
                        - paragraph [ref=e186]:
                          - generic [ref=e187]: "22678"
                        - paragraph [ref=e188]: KCVL-YPR SF EXPRESS
                    - option "22679 YPR-HAS EXPRESS" [ref=e189] [cursor=pointer]:
                      - generic [ref=e190]:
                        - paragraph [ref=e191]:
                          - generic [ref=e192]: "22679"
                        - paragraph [ref=e193]: YPR-HAS EXPRESS
          - generic [ref=e196]:
            - generic [ref=e197]: Your Stop
            - textbox "Your Stop Select Station (optional)" [ref=e198] [cursor=pointer]
            - paragraph [ref=e200]:
              - generic [ref=e201]: Select Station
              - generic [ref=e202]: (optional)
          - generic [ref=e204]:
            - generic [ref=e205]: Train Start Date
            - textbox "Train Start Date Select date (optional)" [ref=e206] [cursor=pointer]
            - paragraph [ref=e208]:
              - generic [ref=e209]: Select date
              - generic [ref=e210]: (optional)
        - paragraph [ref=e211]:
          - generic: CHECK STATUS
    - main [ref=e212]:
      - main [ref=e213]:
        - generic [ref=e214]:
          - generic [ref=e215]:
            - heading "Offers" [level=2] [ref=e216]
            - list [ref=e218]:
              - listitem [ref=e219]:
                - generic [ref=e220] [cursor=pointer]: Trains
              - listitem [ref=e222]:
                - generic [ref=e223] [cursor=pointer]: All Offers
              - listitem [ref=e225]:
                - generic [ref=e226] [cursor=pointer]: Hotels
              - listitem [ref=e228]:
                - generic [ref=e229] [cursor=pointer]: Flights
              - listitem [ref=e231]:
                - generic [ref=e232] [cursor=pointer]: Holidays
              - listitem [ref=e234]:
                - generic [ref=e235] [cursor=pointer]: Bus
              - listitem [ref=e237]:
                - generic [ref=e238] [cursor=pointer]: Cabs
              - listitem [ref=e240]:
                - generic [ref=e241] [cursor=pointer]: Bank Offers
            - generic [ref=e243] [cursor=pointer]: View All
          - generic [ref=e246]:
            - button "Previous" [ref=e247] [cursor=pointer]
            - generic [ref=e249]:
              - generic [ref=e250]:
                - generic [ref=e253] [cursor=pointer]:
                  - generic [ref=e258]:
                    - paragraph [ref=e260]:
                      - generic [ref=e261]: T&C's Apply
                    - paragraph [ref=e262]: Turn Your Weekends into Memorable Getaways.
                    - paragraph [ref=e264]: Grab Up to 40% OFF* on Trips.
                  - generic [ref=e265]: Book Now
                - generic [ref=e270] [cursor=pointer]:
                  - generic [ref=e275]:
                    - paragraph [ref=e277]:
                      - generic [ref=e278]: T&C's Apply
                    - paragraph [ref=e279]: "For Your Diwali Trip: Cancel Train Ticket at ₹0*."
                    - paragraph [ref=e281]: Get Free Cancellation on trains at no additional cost.
                  - generic [ref=e282]: BOOK NOW
              - generic [ref=e285]:
                - generic [ref=e288] [cursor=pointer]:
                  - generic [ref=e293]:
                    - paragraph [ref=e295]:
                      - generic [ref=e296]: T&C's Apply
                    - paragraph [ref=e297]: "For You: Up to ₹40 OFF*"
                    - paragraph [ref=e299]: on Train Bookings.
                  - generic [ref=e300]: BOOK NOW
                - generic [ref=e305] [cursor=pointer]:
                  - generic [ref=e310]:
                    - paragraph [ref=e312]:
                      - generic [ref=e313]: T&C's Apply
                    - paragraph [ref=e314]: Special Deal on Trains for MMTBLACK Members.
                    - paragraph [ref=e316]: "Up to ₹500 OFF* on Alternate Trip Plan or Free Cancellation. Code: MMTBLACK."
                  - generic [ref=e317]: BOOK NOW
              - generic [ref=e320]:
                - generic [ref=e323] [cursor=pointer]:
                  - generic [ref=e328]:
                    - paragraph [ref=e330]:
                      - generic [ref=e331]: T&C's Apply
                    - paragraph [ref=e332]: Aadhaar-based Authentication on IRCTC’s Platform
                    - paragraph [ref=e334]: Now Mandatory for Tatkal Train Bookings.
                  - generic [ref=e335]: BOOK NOW
                - generic [ref=e340] [cursor=pointer]:
                  - generic [ref=e345]:
                    - paragraph [ref=e347]:
                      - generic [ref=e348]: T&C's Apply
                    - paragraph [ref=e349]: "INTRODUCING: Seat Availability Forecast"
                    - paragraph [ref=e351]: and Sold-out Alerts for train bookings.
                  - generic [ref=e352]: BOOK NOW
            - button "Next" [ref=e355] [cursor=pointer]
        - main [ref=e357]
    - main [ref=e361]:
      - list
  - contentinfo [ref=e362]:
    - generic [ref=e366]:
      - generic [ref=e367]:
        - link [ref=e368] [cursor=pointer]:
          - /url: https://www.instagram.com/makemytrip/
        - link [ref=e370] [cursor=pointer]:
          - /url: https://x.com/makemytrip
        - link [ref=e372] [cursor=pointer]:
          - /url: https://in.linkedin.com/company/makemytrip.com?open=outside
        - link [ref=e374] [cursor=pointer]:
          - /url: https://www.facebook.com/makemytrip/
      - paragraph [ref=e377]: © 2026 MakeMyTrip (India) Limited
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
  45 |   await page.locator('#trainNum').click();
  46 |   await page.locator("//input[contains(@class,'react-autosuggest__input')]").fill("22675");
> 47 |   await page.locator("//span[text()='12164']").click();
     |                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  48 |   await page.waitForTimeout(3000);
  49 | })
  50 | 
```