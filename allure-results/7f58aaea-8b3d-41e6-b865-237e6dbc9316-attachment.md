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
  - waiting for locator('//span[text()=\'Select Station\']')
    - locator resolved to <span class="rsw_station">Select Station</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - <span>Chennai Egmore</span> from <ul class="travelForPopup">…</ul> subtree intercepts pointer events
  - retrying click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <li data-cy="RailTravellingStop_347">…</li> from <ul class="travelForPopup">…</ul> subtree intercepts pointer events
  - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li data-cy="RailTravellingStop_347">…</li> from <ul class="travelForPopup">…</ul> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    5 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="chHeaderContainer">…</div> from <div id="SW" class="page-section sticky-scroll topSection appendBottom52">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li data-cy="RailTravellingStop_347">…</li> from <ul class="travelForPopup">…</ul> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="chHeaderContainer">…</div> from <div id="SW" class="page-section sticky-scroll topSection appendBottom52">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - img "Make My Trip" [ref=e8] [cursor=pointer]
      - list
    - generic [ref=e10]:
      - link [ref=e12] [cursor=pointer]:
        - /url: https://www.makemytrip.com
        - img "MMT's LOGO" [ref=e13]
      - navigation [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - link "Flights" [ref=e18] [cursor=pointer]:
              - /url: https://www.makemytrip.com/flights/
          - listitem [ref=e22]:
            - link "Hotels" [ref=e24] [cursor=pointer]:
              - /url: https://www.makemytrip.com/hotels/
          - listitem [ref=e28]:
            - link "Villas & Homestays" [ref=e30] [cursor=pointer]:
              - /url: https://www.makemytrip.com/homestays/
          - listitem [ref=e34]:
            - link "Holiday Packages" [ref=e36] [cursor=pointer]:
              - /url: https://www.makemytrip.com/holidays-india/
          - listitem [ref=e40]:
            - link "Trains" [ref=e42] [cursor=pointer]:
              - /url: https://www.makemytrip.com/railways/
          - listitem [ref=e46]:
            - link "Buses" [ref=e48] [cursor=pointer]:
              - /url: https://www.makemytrip.com/bus-tickets/
          - listitem [ref=e52]:
            - link "Cabs" [ref=e54] [cursor=pointer]:
              - /url: https://www.makemytrip.com/cabs/
          - listitem [ref=e58]:
            - link "Visa" [ref=e60] [cursor=pointer]:
              - /url: https://visa.makemytrip.com/
          - listitem [ref=e64]:
            - link "Forex Card & Currency" [ref=e66] [cursor=pointer]:
              - /url: https://www.makemytrip.com/forex/
          - listitem [ref=e70]:
            - link "Travel Insurance" [ref=e72] [cursor=pointer]:
              - /url: https://www.makemytrip.com/travel-insurance/
          - listitem [ref=e76]:
            - generic [ref=e77]: More
      - list [ref=e83] [cursor=pointer]:
        - generic [ref=e86]:
          - generic [ref=e87]: Wishlist
          - generic [ref=e88]: Save favourites
      - list [ref=e89]:
        - listitem [ref=e90]:
          - generic [ref=e96] [cursor=pointer]:
            - generic [ref=e97]: Login or
            - generic [ref=e98]: Create Account
  - generic [ref=e101]:
    - generic [ref=e103]:
      - generic [ref=e104]:
        - generic [ref=e105] [cursor=pointer]: Book Train Tickets
        - generic [ref=e106] [cursor=pointer]: Check PNR Status
        - generic [ref=e107] [cursor=pointer]: Live Train Status
        - generic [ref=e109]:
          - heading "Live Train Status" [level=1] [ref=e110]
          - paragraph [ref=e111]: IRCTC Authorized e-ticketing
      - generic [ref=e112]:
        - generic [ref=e113]:
          - generic [ref=e115]:
            - generic [ref=e116]: Train Number / Name
            - textbox "Train Number / Name MS-TPJ CHOLAN SF EXP" [ref=e117] [cursor=pointer]: "22675"
            - paragraph [ref=e118]: MS-TPJ CHOLAN SF EXP
          - generic [ref=e119]:
            - generic [ref=e120]:
              - generic [ref=e121]: Your Stop
              - textbox "Your Stop Select Station (optional)" [ref=e122] [cursor=pointer]
              - paragraph [ref=e124]:
                - generic [ref=e125]: Select Station
                - generic [ref=e126]: (optional)
            - list [ref=e127]:
              - listitem [ref=e128] [cursor=pointer]:
                - generic [ref=e129]: Chennai Egmore
                - generic [ref=e130]: MS
              - listitem [ref=e131] [cursor=pointer]:
                - generic [ref=e132]: Tambaram
                - generic [ref=e133]: TBM
              - listitem [ref=e134] [cursor=pointer]:
                - generic [ref=e135]: Chengalpattu Jn
                - generic [ref=e136]: CGL
              - listitem [ref=e137] [cursor=pointer]:
                - generic [ref=e138]: Melmaruvattur
                - generic [ref=e139]: MLMR
              - listitem [ref=e140] [cursor=pointer]:
                - generic [ref=e141]: Tindivanam
                - generic [ref=e142]: TMV
              - listitem [ref=e143] [cursor=pointer]:
                - generic [ref=e144]: Villupuram Jn
                - generic [ref=e145]: VM
              - listitem [ref=e146] [cursor=pointer]:
                - generic [ref=e147]: Panruti
                - generic [ref=e148]: PRT
              - listitem [ref=e149] [cursor=pointer]:
                - generic [ref=e150]: Tirupadripulyur
                - generic [ref=e151]: TDPR
              - listitem [ref=e152] [cursor=pointer]:
                - generic [ref=e153]: Cuddalore Port
                - generic [ref=e154]: CUPJ
              - listitem [ref=e155] [cursor=pointer]:
                - generic [ref=e156]: Chidambaram
                - generic [ref=e157]: CDM
              - listitem [ref=e158] [cursor=pointer]:
                - generic [ref=e159]: Sirkazhi
                - generic [ref=e160]: SY
              - listitem [ref=e161] [cursor=pointer]:
                - generic [ref=e162]: Vaitisvarankoil
                - generic [ref=e163]: VDL
              - listitem [ref=e164] [cursor=pointer]:
                - generic [ref=e165]: Mayiladuturai J
                - generic [ref=e166]: MV
              - listitem [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: Aduturai
                - generic [ref=e169]: ADT
              - listitem [ref=e170] [cursor=pointer]:
                - generic [ref=e171]: Kumbakonam
                - generic [ref=e172]: KMU
              - listitem [ref=e173] [cursor=pointer]:
                - generic [ref=e174]: Papanasam
                - generic [ref=e175]: PML
              - listitem [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: Thanjavur Jn
                - generic [ref=e178]: TJ
              - listitem [ref=e179] [cursor=pointer]:
                - generic [ref=e180]: Budalur
                - generic [ref=e181]: BAL
              - listitem [ref=e182] [cursor=pointer]:
                - generic [ref=e183]: Tiruverumbur
                - generic [ref=e184]: TRB
              - listitem [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: Tiruchchirapali
                - generic [ref=e187]: TPJ
          - generic [ref=e190]:
            - generic [ref=e191]: Train Start Date
            - textbox "Train Start Date Select date (optional)" [ref=e192] [cursor=pointer]
            - paragraph [ref=e194]:
              - generic [ref=e195]: Select date
              - generic [ref=e196]: (optional)
        - paragraph [ref=e197]:
          - generic [ref=e198] [cursor=pointer]: CHECK STATUS
    - main [ref=e199]:
      - main [ref=e200]:
        - generic [ref=e201]:
          - generic [ref=e202]:
            - heading "Offers" [level=2] [ref=e203]
            - list [ref=e205]:
              - listitem [ref=e206]:
                - generic [ref=e207] [cursor=pointer]: Trains
              - listitem [ref=e209]:
                - generic [ref=e210] [cursor=pointer]: All Offers
              - listitem [ref=e212]:
                - generic [ref=e213] [cursor=pointer]: Hotels
              - listitem [ref=e215]:
                - generic [ref=e216] [cursor=pointer]: Flights
              - listitem [ref=e218]:
                - generic [ref=e219] [cursor=pointer]: Holidays
              - listitem [ref=e221]:
                - generic [ref=e222] [cursor=pointer]: Bus
              - listitem [ref=e224]:
                - generic [ref=e225] [cursor=pointer]: Cabs
              - listitem [ref=e227]:
                - generic [ref=e228] [cursor=pointer]: Bank Offers
            - generic [ref=e230] [cursor=pointer]: View All
          - generic [ref=e233]:
            - button "Previous" [ref=e234] [cursor=pointer]
            - generic [ref=e236]:
              - generic [ref=e237]:
                - generic [ref=e240] [cursor=pointer]:
                  - generic [ref=e245]:
                    - paragraph [ref=e247]:
                      - generic [ref=e248]: T&C's Apply
                    - paragraph [ref=e249]: Turn Your Weekends into Memorable Getaways.
                    - paragraph [ref=e251]: Grab Up to 40% OFF* on Trips.
                  - generic [ref=e252]: Book Now
                - generic [ref=e257] [cursor=pointer]:
                  - generic [ref=e262]:
                    - paragraph [ref=e264]:
                      - generic [ref=e265]: T&C's Apply
                    - paragraph [ref=e266]: "For Your Diwali Trip: Cancel Train Ticket at ₹0*."
                    - paragraph [ref=e268]: Get Free Cancellation on trains at no additional cost.
                  - generic [ref=e269]: BOOK NOW
              - generic [ref=e272]:
                - generic [ref=e275] [cursor=pointer]:
                  - generic [ref=e280]:
                    - paragraph [ref=e282]:
                      - generic [ref=e283]: T&C's Apply
                    - paragraph [ref=e284]: "For You: Up to ₹40 OFF*"
                    - paragraph [ref=e286]: on Train Bookings.
                  - generic [ref=e287]: BOOK NOW
                - generic [ref=e292] [cursor=pointer]:
                  - generic [ref=e297]:
                    - paragraph [ref=e299]:
                      - generic [ref=e300]: T&C's Apply
                    - paragraph [ref=e301]: Special Deal on Trains for MMTBLACK Members.
                    - paragraph [ref=e303]: "Up to ₹500 OFF* on Alternate Trip Plan or Free Cancellation. Code: MMTBLACK."
                  - generic [ref=e304]: BOOK NOW
              - generic [ref=e307]:
                - generic [ref=e310] [cursor=pointer]:
                  - generic [ref=e315]:
                    - paragraph [ref=e317]:
                      - generic [ref=e318]: T&C's Apply
                    - paragraph [ref=e319]: Aadhaar-based Authentication on IRCTC’s Platform
                    - paragraph [ref=e321]: Now Mandatory for Tatkal Train Bookings.
                  - generic [ref=e322]: BOOK NOW
                - generic [ref=e327] [cursor=pointer]:
                  - generic [ref=e332]:
                    - paragraph [ref=e334]:
                      - generic [ref=e335]: T&C's Apply
                    - paragraph [ref=e336]: "INTRODUCING: Seat Availability Forecast"
                    - paragraph [ref=e338]: and Sold-out Alerts for train bookings.
                  - generic [ref=e339]: BOOK NOW
            - button "Next" [ref=e342] [cursor=pointer]
        - main [ref=e344]
    - main [ref=e348]:
      - list
  - contentinfo [ref=e349]:
    - generic [ref=e353]:
      - generic [ref=e354]:
        - link [ref=e355] [cursor=pointer]:
          - /url: https://www.instagram.com/makemytrip/
        - link [ref=e357] [cursor=pointer]:
          - /url: https://x.com/makemytrip
        - link [ref=e359] [cursor=pointer]:
          - /url: https://in.linkedin.com/company/makemytrip.com?open=outside
        - link [ref=e361] [cursor=pointer]:
          - /url: https://www.facebook.com/makemytrip/
      - paragraph [ref=e364]: © 2026 MakeMyTrip (India) Limited
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
  47 |   await page.locator("//span[text()='22675']").click();
> 48 |   await page.locator("//span[text()='Select Station']").click();
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  49 |   await page.locator("//ul//li//span[text()='Cuddalore Port']").click();
  50 |   await page.waitForTimeout(3000);
  51 | })
  52 | 
```