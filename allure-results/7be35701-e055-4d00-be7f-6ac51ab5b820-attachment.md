# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning.spec.js >> make my trip
- Location: tests\learning.spec.js:4:5

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
    - waiting for element to be visible, enabled and stable
    - element is not stable
  5 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <li data-cy="RailTravellingStop_347">…</li> from <ul class="travelForPopup">…</ul> subtree intercepts pointer events
  3 × retrying click action
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
    - waiting for element to be visible, enabled and stable
    - element is not stable
  - retrying click action
    - waiting 500ms

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
            - textbox "Train Number / Name MS-TPJ CHOLAN SF EXP" [ref=e135] [cursor=pointer]: "22675"
            - paragraph [ref=e136]: MS-TPJ CHOLAN SF EXP
          - generic [ref=e137]:
            - generic [ref=e138]:
              - generic [ref=e139]: Your Stop
              - textbox "Your Stop Select Station (optional)" [ref=e140] [cursor=pointer]
              - paragraph [ref=e142]:
                - generic [ref=e143]: Select Station
                - generic [ref=e144]: (optional)
            - list [ref=e145]:
              - listitem [ref=e146] [cursor=pointer]:
                - generic [ref=e147]: Chennai Egmore
                - generic [ref=e148]: MS
              - listitem [ref=e149] [cursor=pointer]:
                - generic [ref=e150]: Tambaram
                - generic [ref=e151]: TBM
              - listitem [ref=e152] [cursor=pointer]:
                - generic [ref=e153]: Chengalpattu Jn
                - generic [ref=e154]: CGL
              - listitem [ref=e155] [cursor=pointer]:
                - generic [ref=e156]: Melmaruvattur
                - generic [ref=e157]: MLMR
              - listitem [ref=e158] [cursor=pointer]:
                - generic [ref=e159]: Tindivanam
                - generic [ref=e160]: TMV
              - listitem [ref=e161] [cursor=pointer]:
                - generic [ref=e162]: Villupuram Jn
                - generic [ref=e163]: VM
              - listitem [ref=e164] [cursor=pointer]:
                - generic [ref=e165]: Panruti
                - generic [ref=e166]: PRT
              - listitem [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: Tirupadripulyur
                - generic [ref=e169]: TDPR
              - listitem [ref=e170] [cursor=pointer]:
                - generic [ref=e171]: Cuddalore Port
                - generic [ref=e172]: CUPJ
              - listitem [ref=e173] [cursor=pointer]:
                - generic [ref=e174]: Chidambaram
                - generic [ref=e175]: CDM
              - listitem [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: Sirkazhi
                - generic [ref=e178]: SY
              - listitem [ref=e179] [cursor=pointer]:
                - generic [ref=e180]: Vaitisvarankoil
                - generic [ref=e181]: VDL
              - listitem [ref=e182] [cursor=pointer]:
                - generic [ref=e183]: Mayiladuturai J
                - generic [ref=e184]: MV
              - listitem [ref=e185] [cursor=pointer]:
                - generic [ref=e186]: Aduturai
                - generic [ref=e187]: ADT
              - listitem [ref=e188] [cursor=pointer]:
                - generic [ref=e189]: Kumbakonam
                - generic [ref=e190]: KMU
              - listitem [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: Papanasam
                - generic [ref=e193]: PML
              - listitem [ref=e194] [cursor=pointer]:
                - generic [ref=e195]: Thanjavur Jn
                - generic [ref=e196]: TJ
              - listitem [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: Budalur
                - generic [ref=e199]: BAL
              - listitem [ref=e200] [cursor=pointer]:
                - generic [ref=e201]: Tiruverumbur
                - generic [ref=e202]: TRB
              - listitem [ref=e203] [cursor=pointer]:
                - generic [ref=e204]: Tiruchchirapali
                - generic [ref=e205]: TPJ
          - generic [ref=e208]:
            - generic [ref=e209]: Train Start Date
            - textbox "Train Start Date Select date (optional)" [ref=e210] [cursor=pointer]
            - paragraph [ref=e212]:
              - generic [ref=e213]: Select date
              - generic [ref=e214]: (optional)
        - paragraph [ref=e215]:
          - generic [ref=e216] [cursor=pointer]: CHECK STATUS
    - main [ref=e217]:
      - main [ref=e218]:
        - generic [ref=e219]:
          - generic [ref=e220]:
            - heading "Offers" [level=2] [ref=e221]
            - list [ref=e223]:
              - listitem [ref=e224]:
                - generic [ref=e225] [cursor=pointer]: Trains
              - listitem [ref=e227]:
                - generic [ref=e228] [cursor=pointer]: All Offers
              - listitem [ref=e230]:
                - generic [ref=e231] [cursor=pointer]: Hotels
              - listitem [ref=e233]:
                - generic [ref=e234] [cursor=pointer]: Flights
              - listitem [ref=e236]:
                - generic [ref=e237] [cursor=pointer]: Holidays
              - listitem [ref=e239]:
                - generic [ref=e240] [cursor=pointer]: Bus
              - listitem [ref=e242]:
                - generic [ref=e243] [cursor=pointer]: Cabs
              - listitem [ref=e245]:
                - generic [ref=e246] [cursor=pointer]: Bank Offers
            - generic [ref=e248] [cursor=pointer]: View All
          - generic [ref=e251]:
            - button "Previous" [ref=e252] [cursor=pointer]
            - generic [ref=e254]:
              - generic [ref=e255]:
                - generic [ref=e258] [cursor=pointer]:
                  - generic [ref=e263]:
                    - paragraph [ref=e265]:
                      - generic [ref=e266]: T&C's Apply
                    - paragraph [ref=e267]: Turn Your Weekends into Memorable Getaways.
                    - paragraph [ref=e269]: Grab Up to 40% OFF* on Trips.
                  - generic [ref=e270]: Book Now
                - generic [ref=e275] [cursor=pointer]:
                  - generic [ref=e280]:
                    - paragraph [ref=e282]:
                      - generic [ref=e283]: T&C's Apply
                    - paragraph [ref=e284]: "For Your Diwali Trip: Cancel Train Ticket at ₹0*."
                    - paragraph [ref=e286]: Get Free Cancellation on trains at no additional cost.
                  - generic [ref=e287]: BOOK NOW
              - generic [ref=e290]:
                - generic [ref=e293] [cursor=pointer]:
                  - generic [ref=e298]:
                    - paragraph [ref=e300]:
                      - generic [ref=e301]: T&C's Apply
                    - paragraph [ref=e302]: "For You: Up to ₹40 OFF*"
                    - paragraph [ref=e304]: on Train Bookings.
                  - generic [ref=e305]: BOOK NOW
                - generic [ref=e310] [cursor=pointer]:
                  - generic [ref=e315]:
                    - paragraph [ref=e317]:
                      - generic [ref=e318]: T&C's Apply
                    - paragraph [ref=e319]: Special Deal on Trains for MMTBLACK Members.
                    - paragraph [ref=e321]: "Up to ₹500 OFF* on Alternate Trip Plan or Free Cancellation. Code: MMTBLACK."
                  - generic [ref=e322]: BOOK NOW
              - generic [ref=e325]:
                - generic [ref=e328] [cursor=pointer]:
                  - generic [ref=e333]:
                    - paragraph [ref=e335]:
                      - generic [ref=e336]: T&C's Apply
                    - paragraph [ref=e337]: Aadhaar-based Authentication on IRCTC’s Platform
                    - paragraph [ref=e339]: Now Mandatory for Tatkal Train Bookings.
                  - generic [ref=e340]: BOOK NOW
                - generic [ref=e345] [cursor=pointer]:
                  - generic [ref=e350]:
                    - paragraph [ref=e352]:
                      - generic [ref=e353]: T&C's Apply
                    - paragraph [ref=e354]: "INTRODUCING: Seat Availability Forecast"
                    - paragraph [ref=e356]: and Sold-out Alerts for train bookings.
                  - generic [ref=e357]: BOOK NOW
            - button "Next" [ref=e360] [cursor=pointer]
        - main [ref=e362]
    - main [ref=e366]:
      - list
  - contentinfo [ref=e367]:
    - generic [ref=e371]:
      - generic [ref=e372]:
        - link [ref=e373] [cursor=pointer]:
          - /url: https://www.instagram.com/makemytrip/
        - link [ref=e375] [cursor=pointer]:
          - /url: https://x.com/makemytrip
        - link [ref=e377] [cursor=pointer]:
          - /url: https://in.linkedin.com/company/makemytrip.com?open=outside
        - link [ref=e379] [cursor=pointer]:
          - /url: https://www.facebook.com/makemytrip/
      - paragraph [ref=e382]: © 2026 MakeMyTrip (India) Limited
```

# Test source

```ts
  1  | import {test} from '@playwright/test';
  2  | 
  3  | 
  4  | test('make my trip', async({page}) => {
  5  |   await page.goto('https://www.makemytrip.com/');
  6  |   try{
  7  |   await page.locator('//span[@class="commonModal__close"]').click();
  8  |   } catch(error)
  9  |   {
  10 |     console.log("popup not displayed");
  11 |   }
  12 |   await page.locator('.chNavIcon.appendBottom2.chSprite.chTrains.inactive').click();
  13 |   await page.locator('//span[text()="Live Train Status"]').click();
  14 |   await page.locator('#trainNum').click();
  15 |   await page.locator("//input[contains(@class,'react-autosuggest__input')]").fill("22675");
  16 |   await page.locator("//span[text()='22675']").click();
> 17 |   await page.locator("//span[text()='Select Station']").click();
     |                                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
  18 |   await page.locator("//ul//li//span[text()='Cuddalore Port']").click();
  19 |   await page.locator("#travelDate").click();
  20 |   await page.locator("//ul//li//span[text()='Tomorrow']").click();
  21 |   await page.waitForTimeout(3000);
  22 | })
  23 | 
```