# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning.spec.js >> learning XPath
- Location: tests\learning.spec.js:27:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Search for Products, Brands and More') resolved to 2 elements:
    1) <input name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn26" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka getByRole('textbox', { name: 'Search for Products, Brands' })
    2) <input readonly name="q" value="" type="text" autocomplete="off" class="nw1UBF v1zwn26" title="Search for Products, Brands and More" placeholder="Search for Products, Brands and More"/> aka locator('a').filter({ hasText: 'Search Icon' }).getByPlaceholder('Search for Products, Brands')

Call log:
  - waiting for getByPlaceholder('Search for Products, Brands and More')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link [ref=e37]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]: Location not set
          - generic [ref=e59]: Select delivery location
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /login?ret=/
              - img "Login" [ref=e88]
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link [ref=e110]:
          - /url: https://www.flipkart.com/
          - heading "For You" [level=1] [ref=e116]
        - link "Fashion" [ref=e121]:
          - /url: /ss-26-base-inline-at-store
        - link "Mobiles" [ref=e132]:
          - /url: /mobile-phones-store
        - link "Electronics" [ref=e143]:
          - /url: /new-elec-clp-march-at-store
        - link "Beauty" [ref=e154]:
          - /url: /bpc-bau-new-inline-at-store
        - link "Home" [ref=e165]:
          - /url: /home-kitchen-25-at-store
        - link "Appliances" [ref=e176]:
          - /url: /tv-and-app-bau-clp-at-store
        - link "Toys, baby.." [ref=e187]:
          - /url: /toysbc-new26-inline-at-store
        - link "Food & Health" [ref=e198]:
          - /url: /fnhc-2025-new-at-store
        - link "Auto Accessories" [ref=e209]:
          - /url: /aa-2025-new-at-store
        - link "Sports & Fitness" [ref=e220]:
          - /url: /sf-inline-2025-at-store
        - link "Furniture" [ref=e231]:
          - /url: /india-ka-furniture-studio-inlines-at-store
        - link "Books" [ref=e242]:
          - /url: /books-at-store
        - link "2 Wheelers" [ref=e253]:
          - /url: /twowheelers-at-store
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link [ref=e289]:
          - /url: /audio-video/headset/earphones/pr?sid=0pm%2Cfcn%2C821&p%5B%5D=facets.features%255B%255D%3DTrue%2BWireless&sort=popularity&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D1999&p%5B%5D=facets.price_range.to%3DMax&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=SC5T5675L0UP_IAD&BU=Mixed
          - img "Image" [ref=e292]
        - link [ref=e299]:
          - /url: /flights-travel-uhp-at-store?param=Travel-HPW-3-Msite-Flights-Base-2-5PM&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=VNVIWLHW3933_IAD&BU=Mixed
          - img "Image" [ref=e302]
        - link [ref=e309]:
          - /url: /mivi-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0QITQ81Y6YSR_AD&BU=Mixed
          - img "Image" [ref=e312]
        - link [ref=e319]:
          - /url: /realme-techlife-80-cm-32-inch-qled-hd-ready-smart-android-tv-thunder-os-live-tv-netflix-100-apps-20w-speakers-300-nits-brightness-bezel-less-design/p/itma55e10b960a28?pid=TVSHPCXWC8Y9UYSU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ODKDG0CRZPDT_AD&BU=Mixed
          - img "Image" [ref=e322]
        - link [ref=e329]:
          - /url: /vivo-t5x-5g-fusion-red-128-gb/p/itm7da8aa253e72b?pid=MOBHPGHCZ9HCTCHK&marketplace=FLIPKART&lid&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=7RXJB96E9U2D_AD&BU=Mixed
          - img "Image" [ref=e332]
        - link [ref=e339]:
          - /url: /audio-video/~cs-l4wfccanaj/pr?sid=0pm&collection-tab-name=boat_pa&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OTOSGZKAMUO5_AD&BU=Mixed
          - img "Image" [ref=e342]
        - link [ref=e349]:
          - /url: /televisions/~cs-bmpiy93rky/pr?sid=ckf%2Cczl&collection-tab-name=TCL+A400M+New+Launch&sort=popularity&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=RV02NP5HQO1V_AD&BU=Mixed
          - img "Image" [ref=e352]
      - generic [ref=e370]:
        - generic [ref=e371]: Brands in Spotlight
        - link [ref=e375]:
          - /url: /boltt-evo-berry-red-64-gb/p/itmf046d663a1fd7?pid=MOBHPP598ENKRGBY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BDZXA6LO5BAS_AD&BU=Mixed
          - img "Image" [ref=e381]
      - generic [ref=e391]:
        - generic [ref=e392]: Grab or gone
        - generic [ref=e401]:
          - link "Image Grab Now! Min.70% Off" [ref=e406]:
            - /url: /clothing-and-accessories/pr?sid=clo&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&param=3454&p%5B%5D=facets.brand%255B%255D%3DMARKS%2B%2526%2BSPENCER&param=8966&hpid=nUT-mKtjsqG3qHE7Qrj7K6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uNzAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBBTkhaVUE3NTNGRllHUkMiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNQVJLUyAmIFNQRU5DRVIiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e416]
            - generic [ref=e419]:
              - generic [ref=e420]: Grab Now!
              - generic [ref=e421]: Min.70% Off
          - link "Image Sale From ₹99" [ref=e426]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.brand%255B%255D%3DShocknshop&p%5B%5D=facets.brand%255B%255D%3DDaniel%2BJubile&p%5B%5D=facets.brand%255B%255D%3DHAMT&p%5B%5D=facets.brand%255B%255D%3DHAMT%2BWATCHES&p%5B%5D=facets.brand%255B%255D%3DCurren&p%5B%5D=facets.brand%255B%255D%3DWHITE%2BSTONE&p%5B%5D=facets.brand%255B%255D%3DWristy&p%5B%5D=facets.brand%255B%255D%3DHidelliya&p%5B%5D=facets.brand%255B%255D%3DCHARLIEKEEN&p%5B%5D=facets.brand%255B%255D%3DFOGG&p%5B%5D=facets.brand%255B%255D%3DRizzly&p%5B%5D=facets.brand%255B%255D%3DHMT%2BDLX&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BDEVIN&p%5B%5D=facets.brand%255B%255D%3DJAINX&p%5B%5D=facets.brand%255B%255D%3Dluxurit&p%5B%5D=facets.brand%255B%255D%3DDressberry&p%5B%5D=facets.brand%255B%255D%3DZANZEER&p%5B%5D=facets.brand%255B%255D%3DHALA&p%5B%5D=facets.brand%255B%255D%3DLOIS%2BCARON&p%5B%5D=facets.brand%255B%255D%3DRUSTET&p%5B%5D=facets.brand%255B%255D%3DANALOGUE&p%5B%5D=facets.brand%255B%255D%3DSwisstyle&p%5B%5D=facets.brand%255B%255D%3DAcnos&p%5B%5D=facets.brand%255B%255D%3DDRALIET&p%5B%5D=facets.brand%255B%255D%3DSylvi&p%5B%5D=facets.brand%255B%255D%3DROSEVILLA&p%5B%5D=facets.brand%255B%255D%3DVIRAKTI&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollection&p%5B%5D=facets.brand%255B%255D%3DIIK&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollections&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DDONGA&p%5B%5D=facets.brand%255B%255D%3DHMTM&p%5B%5D=facets.brand%255B%255D%3DMast%2B%2526%2BHarbour&p%5B%5D=facets.brand%255B%255D%3DMATRIX&p%5B%5D=facets.brand%255B%255D%3DTime%2BMatrix&p%5B%5D=facets.brand%255B%255D%3DV2A&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DLongbo&p%5B%5D=facets.brand%255B%255D%3DPIRASO&p%5B%5D=facets.brand%255B%255D%3DLIMESTONE&p%5B%5D=facets.brand%255B%255D%3DLORENZ&p%5B%5D=facets.brand%255B%255D%3DJaxer&p%5B%5D=facets.brand%255B%255D%3DTWIXY&p%5B%5D=facets.brand%255B%255D%3DTIMEWEAR&p%5B%5D=facets.brand%255B%255D%3DMIKADO&p%5B%5D=facets.brand%255B%255D%3DEspoir&p%5B%5D=facets.brand%255B%255D%3DSWADESI%2BSTUFF&p%5B%5D=facets.brand%255B%255D%3DCasado&p%5B%5D=facets.brand%255B%255D%3DCRESTELLO&p%5B%5D=facets.brand%255B%255D%3DSeptem&p%5B%5D=facets.brand%255B%255D%3DEVRGLOW&p%5B%5D=facets.brand%255B%255D%3Dhmt%2BQUARTZ&p%5B%5D=facets.brand%255B%255D%3DHmt%2BSwarna&p%5B%5D=facets.brand%255B%255D%3DHmt%2BFashion&p%5B%5D=facets.brand%255B%255D%3Ddlx%2Bhmt&p%5B%5D=facets.ideal_for%255B%255D%3DWomen&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&param=677878&hpid=A5DoqPS5KmPzCN9jGwlfhKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0FURkhFWllNVTNZWFRSMiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGNoIEZvciBXb21lbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e436]
            - generic [ref=e439]:
              - generic [ref=e440]: Sale
              - generic [ref=e441]: From ₹99
          - link "Image boAt, realme, Mivi & more Min 50% Off" [ref=e446]:
            - /url: /audio-video/pr?sid=0pm&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=w2BGimYwATZXfn_vEkn1oap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0dTWEdUR0pKOVg1WlUiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IE9mIEhlYWRwaG9uZXMgJiBTcGVha2VycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e456]
            - generic [ref=e459]:
              - generic [ref=e460]: boAt, realme, Mivi & more
              - generic [ref=e461]: Min 50% Off
          - link "Image Men's casual shoes... Min. 50% Off" [ref=e466]:
            - /url: /mens-footwear/pr?sid=osp%2Ccil&p%5B%5D=facets.brand%255B%255D%3DFLITE&p%5B%5D=facets.brand%255B%255D%3DBata&p%5B%5D=facets.brand%255B%255D%3DRED%2BTAPE&p%5B%5D=facets.brand%255B%255D%3DSparx&p%5B%5D=facets.brand%255B%255D%3DU.S.%2BPOLO%2BASSN.&p%5B%5D=facets.brand%255B%255D%3DCROCS&p%5B%5D=facets.brand%255B%255D%3Daction&p%5B%5D=facets.brand%255B%255D%3DWOODLAND&p%5B%5D=facets.brand%255B%255D%3DNeemans&p%5B%5D=facets.brand%255B%255D%3DLIBERTY&p%5B%5D=facets.brand%255B%255D%3DBAHAMAS&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DJACK%2B%2526%2BJONES&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DRoadster&p%5B%5D=facets.brand%255B%255D%3DUnited%2BColors%2Bof%2BBenetton&p%5B%5D=facets.brand%255B%255D%3DAbros&p%5B%5D=facets.brand%255B%255D%3DRelaxo&p%5B%5D=facets.brand%255B%255D%3DHUSH%2BPUPPIES&p%5B%5D=facets.brand%255B%255D%3DWALKAROO&p%5B%5D=facets.brand%255B%255D%3DBEWAKOOF&p%5B%5D=facets.brand%255B%255D%3DRED%2BCHIEF&p%5B%5D=facets.brand%255B%255D%3DHUMMEL&p%5B%5D=facets.brand%255B%255D%3DMOCHI&p%5B%5D=facets.brand%255B%255D%3DThe%2BSouled%2BStore&p%5B%5D=facets.brand%255B%255D%3DMETRO&p%5B%5D=facets.brand%255B%255D%3DWROGN&p%5B%5D=facets.brand%255B%255D%3DFCUK&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BPHILIPPE&p%5B%5D=facets.brand%255B%255D%3DFLYING%2BMACHINE&p%5B%5D=facets.brand%255B%255D%3DLEVI%2527S&p%5B%5D=facets.brand%255B%255D%3DCLARKS&p%5B%5D=facets.brand%255B%255D%3DMast%2B%2526%2BHarbour&p%5B%5D=facets.brand%255B%255D%3DSpykar&p%5B%5D=facets.brand%255B%255D%3DPro&p%5B%5D=facets.brand%255B%255D%3DHouse%2Bof%2BPataudi&p%5B%5D=facets.brand%255B%255D%3DTeakwood%2BLeathers&p%5B%5D=facets.brand%255B%255D%3DWildcraft&p%5B%5D=facets.brand%255B%255D%3DALDO&p%5B%5D=facets.brand%255B%255D%3DLEE%2BCOOPER&p%5B%5D=facets.brand%255B%255D%3DSOLETHREADS%2BREBEL&p%5B%5D=facets.brand%255B%255D%3DDUCATI&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&param=9876&hpid=L5rspefnn2XY2B1vlEGn36p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDUwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSE9HQ05OWUEyQlNaS1JOIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQWN0aW9uLCBBYnJvcy4uLiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e476]
            - generic [ref=e479]:
              - generic [ref=e480]: Men's casual shoes...
              - generic [ref=e481]: Min. 50% Off
      - link [ref=e492]:
        - /url: /flights-travel-uhp-at-store?param=Flights-Bookings-dontmiss&BU=Mixed
        - img "Image" [ref=e498]
      - generic [ref=e508]:
        - generic [ref=e512]:
          - img "Image" [ref=e515]
          - generic [ref=e517]:
            - generic [ref=e518]: Trending Deals on Furniture
            - link [ref=e520]:
              - /url: /offers-list/trending-deals-on-furniture?screen=dynamic&pk=contentTags%3DGCD_THEME_6%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e527]:
          - link "Image Shoe Rack Min. 50% Off" [ref=e532]:
            - /url: https://www.flipkart.com/all/~cs-ccd8a2f7918e32d3cf7ea36e0f505f88/pr?sid=wwe%2C0ye%2Cn0l&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e542]
            - generic [ref=e545]:
              - generic [ref=e546]: Shoe Rack
              - generic [ref=e547]: Min. 50% Off
          - link "Image Home Temple Min. 50% Off" [ref=e552]:
            - /url: https://www.flipkart.com/all/~cs-3d4632b24927904c195030145b4f5965/pr?sid=wwe%2Cq7b%2C9zz&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e562]
            - generic [ref=e565]:
              - generic [ref=e566]: Home Temple
              - generic [ref=e567]: Min. 50% Off
          - link "Image Drawers Min. 50% Off" [ref=e572]:
            - /url: https://www.flipkart.com/all/~cs-a8268b569c2836d9b9a8838ecbf89887/pr?sid=wwe%2Cxdf&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e582]
            - generic [ref=e585]:
              - generic [ref=e586]: Drawers
              - generic [ref=e587]: Min. 50% Off
          - link "Image Kid Seating Min. 50% Off" [ref=e592]:
            - /url: https://www.flipkart.com/all/~cs-a39eb58a3f6fb70cdde11ec02bf29bb1/pr?sid=wwe%2Cq7b%2Ckh7&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e602]
            - generic [ref=e605]:
              - generic [ref=e606]: Kid Seating
              - generic [ref=e607]: Min. 50% Off
      - generic [ref=e619]:
        - generic [ref=e620]:
          - link "Image Credit Card" [ref=e625]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e628]
            - generic [ref=e629]: Credit Card
          - link "Image Flipkart EMI" [ref=e634]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IEVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e637]
            - generic [ref=e638]: Flipkart EMI
          - link "Image Pay Later" [ref=e643]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e646]
            - generic [ref=e647]: Pay Later
          - link "Image For GenZ" [ref=e652]:
            - /url: /ls-gen-z-26-at-store?param=3258257&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e655]
            - generic [ref=e656]: For GenZ
          - link "Image Pinkvilla" [ref=e661]:
            - /url: http://www.flipkart.com/ultra/?url=&clientId=Pinkvilla1787836811.services
            - img "Image" [ref=e664]
            - generic [ref=e665]: Pinkvilla
          - link "Image Flipkart Pay" [ref=e670]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IFBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e673]
            - generic [ref=e674]: Flipkart Pay
          - link "Image Gift Cards" [ref=e679]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e682]
            - generic [ref=e683]: Gift Cards
          - link "Image Sell Phone" [ref=e688]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e691]
            - generic [ref=e692]: Sell Phone
          - link "Image Plus" [ref=e697]:
            - /url: /plus?param=379289&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBsdXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e700]
            - generic [ref=e701]: Plus
          - link "Image Originals" [ref=e706]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e709]
            - generic [ref=e710]: Originals
          - link "Image Next-Gen" [ref=e715]:
            - /url: /next-gen-brands-store?param=098124&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQtR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e718]
            - generic [ref=e719]: Next-Gen
          - link "Image SuperCoin" [ref=e724]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e727]
            - generic [ref=e728]: SuperCoin
        - button [ref=e729]
      - generic [ref=e741]:
        - generic [ref=e745]:
          - img "Image" [ref=e748]
          - generic [ref=e749]: Top Value Deals
        - generic [ref=e757]:
          - generic [ref=e758]:
            - link [ref=e764]:
              - /url: /womens-footwear/womens-slippers-flip-flops/~cs-l9ww3f51j0/pr?sid=osp%2Ciko%2Ciz7&collection-tab-name=Footwear-Womenslippers&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D299&offer=vl%3A05a8940617&BU=Mixed
              - img "Image" [ref=e773]
            - link [ref=e779]:
              - /url: /watches/~cs-05p29xcfx1/pr?sid=r18&collection-tab-name=Watch&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3D499&offer=vl%3A05a8940617&BU=Mixed
              - img "Image" [ref=e788]
            - link [ref=e794]:
              - /url: /baby-care/diaper-potty-training/baby-wipes/~cs-3xjb4nxne9/pr?sid=kyh%2Cfdp%2Ckvq&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&param=2345&BU=Mixed
              - img "Image" [ref=e803]
            - link [ref=e809]:
              - /url: /product/p/itme?pid=AFRHFV6FUFRGEZGT&BU=Mixed
              - img "Image" [ref=e818]
            - link [ref=e824]:
              - /url: /product/p/itme?pid=SWME9QYTKUHGWNKC&BU=Mixed
              - img "Image" [ref=e833]
            - link [ref=e839]:
              - /url: /furniture/~cs-fuov8dfuh4/pr?sid=wwe&collection-tab-name=Home+temple&param=64921&BU=Mixed
              - img "Image" [ref=e848]
            - link [ref=e854]:
              - /url: /upp/~cs-k8ah0c8npk/pr?sid=upp&collection-tab-name=Pan+&BU=Mixed
              - img "Image" [ref=e863]
            - link [ref=e869]:
              - /url: /product/p/itme?pid=CPCHHDQFGZKCYV9F&BU=Mixed
              - img "Image" [ref=e878]
            - link [ref=e884]:
              - /url: /product/p/itme?pid=AFRHZPRGYMHF42FG&BU=Mixed
              - img "Image" [ref=e893]
            - link [ref=e899]:
              - /url: /upp/~cs-gk6jrnkkkm/pr?sid=upp&collection-tab-name=kitchen+knife&BU=Mixed
              - img "Image" [ref=e908]
            - link [ref=e914]:
              - /url: /baby-care/baby-bedding/~cs-3xjb4nxne9/pr?sid=kyh%2C7j3&p%5B%5D=facets.discount_range_v1%255B%255D%3D30%2525%2Bor%2Bmore&param=234567654&BU=Mixed
              - img "Image" [ref=e923]
          - button [ref=e924]
      - generic [ref=e936]:
        - generic [ref=e937]: Brands in Spotlight
        - generic [ref=e942]:
          - link [ref=e947]:
            - /url: /beauty-and-grooming/pr?sid=g9b&p%5B%5D=facets.brand%255B%255D%3DTHE%2BMAN%2BCOMPANY&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=S1KWH83VC69H_AD&BU=Mixed
            - img "Image" [ref=e950]
          - link [ref=e955]:
            - /url: /beauty-and-grooming/makeup/makeup-kits-combo/pr?sid=g9b%2Cffi%2C3dd&p%5B%5D=facets.brand%255B%255D%3DBLUE%2BHEAVEN&sort=recency_desc&p%5B%5D=facets.availability%255B%255D%3DInclude%2BOut%2Bof%2BStock&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NZ2DUCNDU8IR_AD&BU=Mixed
            - img "Image" [ref=e958]
          - link [ref=e963]:
            - /url: /beauty-and-grooming/fragrances/deodorants/pr?sid=g9b%2C0yh%2Cvp1&p%5B%5D=facets.brand%255B%255D%3DDenver&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=H1B0XU69GEYF_AD&BU=Mixed
            - img "Image" [ref=e966]
      - generic [ref=e978]:
        - link [ref=e983]:
          - /url: /mivi-duopods-b1-just-launched-45hrs-playtime-ai-enc-hd-call-fast-charging-5-3-bluetooth/p/itmb88189abeb525?pid=ACCH8Z35ZAJSR9CU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=GZVCYXDSN0I0_AD&BU=Mixed
          - img "Image" [ref=e986]
        - link [ref=e991]:
          - /url: /noise-store?param=998877&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=H6UH8FAQ57T1_AD&BU=Mixed
          - img "Image" [ref=e994]
        - link [ref=e999]:
          - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=SMWH889PBS7E5RPA&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=WPEPDAWZCYDR_AD&BU=Mixed
          - img "Image" [ref=e1002]
      - generic [ref=e1012]:
        - generic [ref=e1013]: Interesting finds
        - generic [ref=e1022]:
          - link "Image Top Collection Under ₹199" [ref=e1027]:
            - /url: /all/~cs-88f1faa6f76fec65ad563507cd26a321/pr?sid=4rr%2Ckm5%2Cipq&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkxOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4IjoxOTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NITUpWWjhZRlo2ODYzIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ2FzZXMgJiBDb3ZlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e1037]
            - generic [ref=e1040]:
              - generic [ref=e1041]: Top Collection
              - generic [ref=e1042]: Under ₹199
          - link "Image Most Loved Top Rated" [ref=e1047]:
            - /url: /all/~cs-0e736727c7b20760cadc022d17072ff4/pr?sid=clo%2Ccfv%2Citg%2Ctys&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJFVEhIR0c5QVc0Qko2VUFHIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1057]
            - generic [ref=e1060]:
              - generic [ref=e1061]: Most Loved
              - generic [ref=e1062]: Top Rated
          - link "Image Most Loved Top Rated" [ref=e1067]:
            - /url: /all/~cs-08846a5d668befbbaea28557289788d4/pr?sid=tng%2C56a%2Cfq8%2Cgl8&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJSQ1RIQzdHM0daR1lRTU5VIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1077]
            - generic [ref=e1080]:
              - generic [ref=e1081]: Most Loved
              - generic [ref=e1082]: Top Rated
          - link "Image Big Savings Top Rated" [ref=e1087]:
            - /url: /all/~cs-a1374fd404fb5cc44b6a09a4d90b6a21/pr?sid=arb%2Cg0v%2C6vh&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBUlBHN1pSSFdQMzhSVTg5IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e1097]
            - generic [ref=e1100]:
              - generic [ref=e1101]: Big Savings
              - generic [ref=e1102]: Top Rated
      - generic [ref=e1104]: Hang on, loading content
      - generic [ref=e1118]:
        - generic [ref=e1119]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1120]: +
      - contentinfo [ref=e1121]:
        - generic [ref=e1123]:
          - generic [ref=e1124]:
            - generic [ref=e1125]:
              - generic [ref=e1126]: ABOUT
              - link "Contact Us" [ref=e1127]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1128]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1129]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1130]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1131]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1132]:
                - /url: /corporate-information
            - generic [ref=e1133]:
              - generic [ref=e1134]: GROUP COMPANIES
              - link "Myntra" [ref=e1135]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1136]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1137]:
                - /url: https://www.shopsy.in
            - generic [ref=e1138]:
              - generic [ref=e1139]: HELP
              - link "Payments" [ref=e1140]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1141]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1142]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1143]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1144]:
              - generic [ref=e1145]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1146]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1147]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1148]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1149]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1150]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1151]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1152]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1153]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1154]:
              - generic [ref=e1155]: "Mail Us:"
              - generic [ref=e1156]:
                - paragraph [ref=e1157]: Flipkart Internet Private Limited,
                - paragraph [ref=e1158]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1159]: Clove Embassy Tech Village,
                - paragraph [ref=e1160]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1161]: Bengaluru, 560103,
                - paragraph [ref=e1162]: Karnataka, India
              - generic [ref=e1163]: "Social:"
              - generic [ref=e1164]:
                - link "Facebook" [ref=e1166]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1167]
                - link "Twitter" [ref=e1169]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1170]
                - link "YouTube" [ref=e1172]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1173]
                - link "Instagram" [ref=e1175]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1176]
            - generic [ref=e1177]:
              - generic [ref=e1178]: "Registered Office Address:"
              - generic [ref=e1179]:
                - paragraph [ref=e1180]: Flipkart Internet Private Limited,
                - paragraph [ref=e1181]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1182]: Clove Embassy Tech Village,
                - paragraph [ref=e1183]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1184]: Bengaluru, 560103,
                - paragraph [ref=e1185]: Karnataka, India
                - paragraph [ref=e1186]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1187]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1188]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1189]:
                    - /url: tel:044-67415800
          - generic [ref=e1190]:
            - generic [ref=e1191]:
              - img "Become a Seller" [ref=e1192]
              - link "Become a Seller" [ref=e1193]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1194]:
              - img "Advertise" [ref=e1195]
              - generic "Advertise" [ref=e1196]
            - generic [ref=e1197]:
              - img "Gift Cards" [ref=e1198]
              - link "Gift Cards" [ref=e1199]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1200]:
              - img "Help Center" [ref=e1201]
              - link "Help Center" [ref=e1202]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1203]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
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
  27 | test('learning XPath', async({page}) => {
  28 |   await page.goto('https://www.flipkart.com/');
> 29 |   await page.getByPlaceholder('Search for Products, Brands and More').fill('iphone 17');
     |                                                                       ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Search for Products, Brands and More') resolved to 2 elements:
  30 | })
```