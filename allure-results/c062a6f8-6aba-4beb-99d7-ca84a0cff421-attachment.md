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
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('react-autosuggest__input react-autosuggest__input--open')

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
              - textbox [active] [ref=e138]
              - listbox [ref=e139]:
                - generic [ref=e140]:
                  - paragraph [ref=e142]: POPULAR TRAINS
                  - listbox [ref=e143]:
                    - option "12055 Ddn Jan Shatabdi" [ref=e144] [cursor=pointer]:
                      - generic [ref=e145]:
                        - paragraph [ref=e146]:
                          - generic [ref=e147]: "12055"
                        - paragraph [ref=e148]: Ddn Jan Shatabdi
                    - option "22435 VANDE BHARAT EXP" [ref=e149] [cursor=pointer]:
                      - generic [ref=e150]:
                        - paragraph [ref=e151]:
                          - generic [ref=e152]: "22435"
                        - paragraph [ref=e153]: VANDE BHARAT EXP
                    - option "12809 Csmt-hwh Mail Sf Special" [ref=e154] [cursor=pointer]:
                      - generic [ref=e155]:
                        - paragraph [ref=e156]:
                          - generic [ref=e157]: "12809"
                        - paragraph [ref=e158]: Csmt-hwh Mail Sf Special
                    - option "02806 Ndls Vskp Ap Special" [ref=e159] [cursor=pointer]:
                      - generic [ref=e160]:
                        - paragraph [ref=e161]:
                          - generic [ref=e162]: "02806"
                        - paragraph [ref=e163]: Ndls Vskp Ap Special
                    - option "02378 Noq Sdah Special" [ref=e164] [cursor=pointer]:
                      - generic [ref=e165]:
                        - paragraph [ref=e166]:
                          - generic [ref=e167]: "02378"
                        - paragraph [ref=e168]: Noq Sdah Special
          - generic [ref=e171]:
            - generic [ref=e172]: Your Stop
            - textbox "Your Stop Select Station (optional)" [ref=e173] [cursor=pointer]
            - paragraph [ref=e175]:
              - generic [ref=e176]: Select Station
              - generic [ref=e177]: (optional)
          - generic [ref=e179]:
            - generic [ref=e180]: Train Start Date
            - textbox "Train Start Date Select date (optional)" [ref=e181] [cursor=pointer]
            - paragraph [ref=e183]:
              - generic [ref=e184]: Select date
              - generic [ref=e185]: (optional)
        - paragraph [ref=e186]:
          - generic: CHECK STATUS
    - main [ref=e187]:
      - main [ref=e188]:
        - generic [ref=e189]:
          - generic [ref=e190]:
            - heading "Offers" [level=2] [ref=e191]
            - list [ref=e193]:
              - listitem [ref=e194]:
                - generic [ref=e195] [cursor=pointer]: Trains
              - listitem [ref=e197]:
                - generic [ref=e198] [cursor=pointer]: All Offers
              - listitem [ref=e200]:
                - generic [ref=e201] [cursor=pointer]: Hotels
              - listitem [ref=e203]:
                - generic [ref=e204] [cursor=pointer]: Flights
              - listitem [ref=e206]:
                - generic [ref=e207] [cursor=pointer]: Holidays
              - listitem [ref=e209]:
                - generic [ref=e210] [cursor=pointer]: Bus
              - listitem [ref=e212]:
                - generic [ref=e213] [cursor=pointer]: Cabs
              - listitem [ref=e215]:
                - generic [ref=e216] [cursor=pointer]: Bank Offers
            - generic [ref=e218] [cursor=pointer]: View All
          - generic [ref=e221]:
            - button "Previous" [ref=e222] [cursor=pointer]
            - generic [ref=e224]:
              - generic [ref=e225]:
                - generic [ref=e228] [cursor=pointer]:
                  - generic [ref=e233]:
                    - paragraph [ref=e235]:
                      - generic [ref=e236]: T&C's Apply
                    - paragraph [ref=e237]: Turn Your Weekends into Memorable Getaways.
                    - paragraph [ref=e239]: Grab Up to 40% OFF* on Trips.
                  - generic [ref=e240]: Book Now
                - generic [ref=e245] [cursor=pointer]:
                  - generic [ref=e250]:
                    - paragraph [ref=e252]:
                      - generic [ref=e253]: T&C's Apply
                    - paragraph [ref=e254]: "For Your Diwali Trip: Cancel Train Ticket at ₹0*."
                    - paragraph [ref=e256]: Get Free Cancellation on trains at no additional cost.
                  - generic [ref=e257]: BOOK NOW
              - generic [ref=e260]:
                - generic [ref=e263] [cursor=pointer]:
                  - generic [ref=e268]:
                    - paragraph [ref=e270]:
                      - generic [ref=e271]: T&C's Apply
                    - paragraph [ref=e272]: "For You: Up to ₹40 OFF*"
                    - paragraph [ref=e274]: on Train Bookings.
                  - generic [ref=e275]: BOOK NOW
                - generic [ref=e280] [cursor=pointer]:
                  - generic [ref=e285]:
                    - paragraph [ref=e287]:
                      - generic [ref=e288]: T&C's Apply
                    - paragraph [ref=e289]: Special Deal on Trains for MMTBLACK Members.
                    - paragraph [ref=e291]: "Up to ₹500 OFF* on Alternate Trip Plan or Free Cancellation. Code: MMTBLACK."
                  - generic [ref=e292]: BOOK NOW
              - generic [ref=e295]:
                - generic [ref=e298] [cursor=pointer]:
                  - generic [ref=e303]:
                    - paragraph [ref=e305]:
                      - generic [ref=e306]: T&C's Apply
                    - paragraph [ref=e307]: Aadhaar-based Authentication on IRCTC’s Platform
                    - paragraph [ref=e309]: Now Mandatory for Tatkal Train Bookings.
                  - generic [ref=e310]: BOOK NOW
                - generic [ref=e315] [cursor=pointer]:
                  - generic [ref=e320]:
                    - paragraph [ref=e322]:
                      - generic [ref=e323]: T&C's Apply
                    - paragraph [ref=e324]: "INTRODUCING: Seat Availability Forecast"
                    - paragraph [ref=e326]: and Sold-out Alerts for train bookings.
                  - generic [ref=e327]: BOOK NOW
            - button "Next" [ref=e330] [cursor=pointer]
        - main [ref=e332]
    - main [ref=e336]:
      - list
  - contentinfo [ref=e337]:
    - generic [ref=e341]:
      - generic [ref=e342]:
        - link [ref=e343] [cursor=pointer]:
          - /url: https://www.instagram.com/makemytrip/
        - link [ref=e345] [cursor=pointer]:
          - /url: https://x.com/makemytrip
        - link [ref=e347] [cursor=pointer]:
          - /url: https://in.linkedin.com/company/makemytrip.com?open=outside
        - link [ref=e349] [cursor=pointer]:
          - /url: https://www.facebook.com/makemytrip/
      - paragraph [ref=e352]: © 2026 MakeMyTrip (India) Limited
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
> 46 |   await page.locator('react-autosuggest__input react-autosuggest__input--open').fill("12164");
     |                                                                                 ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  47 |   await page.locator("//span[text()='12164']").click();
  48 |   await page.waitForTimeout(3000);
  49 | })
  50 | 
```