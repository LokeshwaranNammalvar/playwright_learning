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
          - link [ref=e37] [cursor=pointer]:
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
          - link "Cart Cart" [ref=e101] [cursor=pointer]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link [ref=e110] [cursor=pointer]:
          - /url: https://www.flipkart.com/
          - heading "For You" [level=1] [ref=e116]
        - link "Fashion" [ref=e121] [cursor=pointer]:
          - /url: /ss-26-base-inline-at-store
        - link "Mobiles" [ref=e132] [cursor=pointer]:
          - /url: /mobile-phones-store
        - link "Electronics" [ref=e143] [cursor=pointer]:
          - /url: /new-elec-clp-march-at-store
        - link "Beauty" [ref=e154] [cursor=pointer]:
          - /url: /bpc-bau-new-inline-at-store
        - link "Home" [ref=e165] [cursor=pointer]:
          - /url: /home-kitchen-25-at-store
        - link "Appliances" [ref=e176] [cursor=pointer]:
          - /url: /tv-and-app-bau-clp-at-store
        - link "Toys, baby.." [ref=e187] [cursor=pointer]:
          - /url: /toysbc-new26-inline-at-store
        - link "Food & Health" [ref=e198] [cursor=pointer]:
          - /url: /fnhc-2025-new-at-store
        - link "Auto Accessories" [ref=e209] [cursor=pointer]:
          - /url: /aa-2025-new-at-store
        - link "Sports & Fitness" [ref=e220] [cursor=pointer]:
          - /url: /sf-inline-2025-at-store
        - link "Furniture" [ref=e231] [cursor=pointer]:
          - /url: /india-ka-furniture-studio-inlines-at-store
        - link "Books" [ref=e242] [cursor=pointer]:
          - /url: /books-at-store
        - link "2 Wheelers" [ref=e253] [cursor=pointer]:
          - /url: /twowheelers-at-store
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link [ref=e289] [cursor=pointer]:
          - /url: /audio-video/headset/earphones/pr?sid=0pm%2Cfcn%2C821&p%5B%5D=facets.features%255B%255D%3DTrue%2BWireless&sort=popularity&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D1999&p%5B%5D=facets.price_range.to%3DMax&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=SC5T5675L0UP_IAD&BU=Mixed
          - img "Image" [ref=e292]
        - link [ref=e299] [cursor=pointer]:
          - /url: /flights-travel-uhp-at-store?param=Travel-HPW-3-Msite-Flights-Base-2-5PM&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=VNVIWLHW3933_IAD&BU=Mixed
          - img "Image" [ref=e302]
        - link [ref=e309] [cursor=pointer]:
          - /url: /mivi-coming-soon-ads-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0QITQ81Y6YSR_AD&BU=Mixed
          - img "Image" [ref=e312]
        - link [ref=e319] [cursor=pointer]:
          - /url: /realme-techlife-80-cm-32-inch-qled-hd-ready-smart-android-tv-thunder-os-live-tv-netflix-100-apps-20w-speakers-300-nits-brightness-bezel-less-design/p/itma55e10b960a28?pid=TVSHPCXWC8Y9UYSU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ODKDG0CRZPDT_AD&BU=Mixed
          - img "Image" [ref=e322]
        - link [ref=e329] [cursor=pointer]:
          - /url: /vivo-t5-5g-royal-bronze-128-gb/p/itm8fa150d1fa2d2?pid=MOBHQC8DMYUHNY2A&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XM8EO2HK1MGC_AD&BU=Mixed
          - img "Image" [ref=e332]
        - link [ref=e339] [cursor=pointer]:
          - /url: /audio-video/~cs-l4wfccanaj/pr?sid=0pm&collection-tab-name=boat_pa&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OTOSGZKAMUO5_AD&BU=Mixed
          - img "Image" [ref=e342]
        - link [ref=e349] [cursor=pointer]:
          - /url: /tcl-55q6cs-139-cm-55-inch-ultra-hd-4k-mini-led-smart-google-tv-high-hdr-brightness-312-dimming-zones-aipq-processor-dolby-vision-atmos-40-w-onkyo-2-1-hi-fi-system-imax-enhanced/p/itm616bcc87ac327?pid=TVSHAVHGM4ZFYNQJ&lid=LSTTVSHAVHGM4ZFYNQJ7CX24Z&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=QR6SRDEO3YKX_AD&BU=Mixed
          - img "Image" [ref=e352]
      - generic [ref=e370]:
        - generic [ref=e371]: Brands in Spotlight
        - link [ref=e375] [cursor=pointer]:
          - /url: /boltt-evo-berry-red-64-gb/p/itmf046d663a1fd7?pid=MOBHPP598ENKRGBY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BDZXA6LO5BAS_AD&BU=Mixed
          - img "Image" [ref=e381]
      - generic [ref=e391]:
        - generic [ref=e392]: Popular nearby
        - generic [ref=e401]:
          - link "Image Best Price Ever! From ₹99" [ref=e406] [cursor=pointer]:
            - /url: /building-materials-and-supplies/electrical-hardware/spike-guard-and-surge-protectors/~cs-lkmrtnchya/pr?sid=b8s%2Cprq%2Cgxf&hpid=z_6vSScngT6C0g5zT1ZdxKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiU1VSR0ZISkZTWkdXQkVRSiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkV4dGVuc2lvbiBDb3JkcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e416]
            - generic [ref=e419]:
              - generic [ref=e420]: Best Price Ever!
              - generic [ref=e421]: From ₹99
          - link "Image Deal of the Day From ₹99" [ref=e426] [cursor=pointer]:
            - /url: /watches/wrist-watches/pr?sid=r18%2Cf13&p%5B%5D=facets.price_range.from%3D99&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DShocknshop&p%5B%5D=facets.brand%255B%255D%3DCurren&p%5B%5D=facets.brand%255B%255D%3DWristy&p%5B%5D=facets.brand%255B%255D%3DFOGG&p%5B%5D=facets.brand%255B%255D%3DCHARLIEKEEN&p%5B%5D=facets.brand%255B%255D%3DLOUIS%2BDEVIN&p%5B%5D=facets.brand%255B%255D%3Dluxurit&p%5B%5D=facets.brand%255B%255D%3DLOIS%2BCARON&p%5B%5D=facets.brand%255B%255D%3DANALOGUE&p%5B%5D=facets.brand%255B%255D%3DRUSTET&p%5B%5D=facets.brand%255B%255D%3DAcnos&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollection&p%5B%5D=facets.brand%255B%255D%3DIIK%2BCollections&p%5B%5D=facets.brand%255B%255D%3DPROVOGUE&p%5B%5D=facets.brand%255B%255D%3DMATRIX&p%5B%5D=facets.brand%255B%255D%3DTime%2BMatrix&p%5B%5D=facets.brand%255B%255D%3DKILLER&p%5B%5D=facets.brand%255B%255D%3DPIRASO&p%5B%5D=facets.brand%255B%255D%3DEDDY%2BHAGER&p%5B%5D=facets.brand%255B%255D%3DLIMESTONE&p%5B%5D=facets.brand%255B%255D%3DLORENZ&p%5B%5D=facets.brand%255B%255D%3DSKMEI&p%5B%5D=facets.brand%255B%255D%3DTIMEWEAR&p%5B%5D=facets.brand%255B%255D%3DCasado&p%5B%5D=facets.brand%255B%255D%3DMETRONAUT&p%5B%5D=facets.brand%255B%255D%3DM7%2BBy%2BMetronaut&p%5B%5D=facets.brand%255B%255D%3DABREXO&p%5B%5D=facets.brand%255B%255D%3DSeptem&p%5B%5D=facets.brand%255B%255D%3DNAVlFORCE&p%5B%5D=facets.brand%255B%255D%3DNAVIFORCE&p%5B%5D=facets.brand%255B%255D%3DOVERFLY&p%5B%5D=facets.brand%255B%255D%3DNIBOSI&p%5B%5D=facets.brand%255B%255D%3DV2A&p%5B%5D=facets.brand%255B%255D%3DAlix&p%5B%5D=facets.brand%255B%255D%3DKitcone&p%5B%5D=facets.brand%255B%255D%3DLongbo&p%5B%5D=facets.brand%255B%255D%3DBruno%2BMilano&p%5B%5D=facets.brand%255B%255D%3DBENYAR&p%5B%5D=facets.brand%255B%255D%3DSylvi&p%5B%5D=facets.brand%255B%255D%3DBenling&p%5B%5D=facets.brand%255B%255D%3DOLEVS&p%5B%5D=facets.brand%255B%255D%3DYHMEI&param=768787&hpid=_LEB_oDVnnx6rheeL0HHXap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiV0FUSDNOWEhVR1ZVUVVXRyIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIldhdGNoZXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e436]
            - generic [ref=e439]:
              - generic [ref=e440]: Deal of the Day
              - generic [ref=e441]: From ₹99
          - link "Image Shop now From ₹299" [ref=e446] [cursor=pointer]:
            - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&sort=popularity&p%5B%5D=facets.pattern%255B%255D%3DEmbroidered&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3DMax&Param=54711&hpid=hHYMAnA4Ps7KRrEuOnW-fqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkVUSEhBVVJNWlpZOEFZWFgiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJFbWJyb2lkZXJlZCBzZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e456]
            - generic [ref=e459]:
              - generic [ref=e460]: Shop now
              - generic [ref=e461]: From ₹299
          - link "Image Milton, Cello & more From ₹129" [ref=e466] [cursor=pointer]:
            - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&sort=popularity&p%5B%5D=facets.price_range.from%3D129&p%5B%5D=facets.price_range.to%3DMax&hpid=uBvWEo4NUmh0PT8_4P0PDap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEyOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkJPVEdGVlQ5UERLTVFKVEYiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXYXRlciBCb3R0bGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e476]
            - generic [ref=e479]:
              - generic [ref=e480]: Milton, Cello & more
              - generic [ref=e481]: From ₹129
      - link [ref=e492] [cursor=pointer]:
        - /url: /flights-travel-uhp-at-store?param=Flights-Bookings-dontmiss&BU=Mixed
        - img "Image" [ref=e498]
      - generic [ref=e508]:
        - generic [ref=e512]:
          - img "Image" [ref=e515]
          - generic [ref=e517]:
            - generic [ref=e518]: Best Value Deals on Fashion
            - link [ref=e520] [cursor=pointer]:
              - /url: /offers-list/best-value-deals-on-fashion?screen=dynamic&pk=contentTags%3DGCD_THEME_8%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e528]:
          - link "Image Men’s Casual Shoes Min. 70% Off" [ref=e533] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp%2Ccil%2Ce1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e543]
            - generic [ref=e546]:
              - generic [ref=e547]: Men’s Casual Shoes
              - generic [ref=e548]: Min. 70% Off
          - link "Image Men’s Sports Shoes Min. 70% Off" [ref=e553] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp%2Ccil%2C1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e563]
            - generic [ref=e566]:
              - generic [ref=e567]: Men’s Sports Shoes
              - generic [ref=e568]: Min. 70% Off
          - link "Image Men’s Slippers & Flip Flops Min. 70% Off" [ref=e573] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp%2Ccil%2Ce1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e583]
            - generic [ref=e586]:
              - generic [ref=e587]: Men’s Slippers & Flip Flops
              - generic [ref=e588]: Min. 70% Off
          - link "Image Women's Sarees Min. 50% Off" [ref=e593] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-c6d1c0bc13f17c317f6447e890166c33/pr?sid=clo%2C8on%2Czpd%2C9og&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e603]
            - generic [ref=e606]:
              - generic [ref=e607]: Women's Sarees
              - generic [ref=e608]: Min. 50% Off
      - generic [ref=e620]:
        - generic [ref=e621]:
          - link "Image Credit Card" [ref=e626] [cursor=pointer]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e629]
            - generic [ref=e630]: Credit Card
          - link "Image Flipkart EMI" [ref=e635] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IEVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e638]
            - generic [ref=e639]: Flipkart EMI
          - link "Image Pay Later" [ref=e644] [cursor=pointer]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e647]
            - generic [ref=e648]: Pay Later
          - link "Image For GenZ" [ref=e653] [cursor=pointer]:
            - /url: /ls-gen-z-26-at-store?param=3258257&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e656]
            - generic [ref=e657]: For GenZ
          - link "Image Pinkvilla" [ref=e662] [cursor=pointer]:
            - /url: http://www.flipkart.com/ultra/?url=&clientId=Pinkvilla1787836811.services
            - img "Image" [ref=e665]
            - generic [ref=e666]: Pinkvilla
          - link "Image Flipkart Pay" [ref=e671] [cursor=pointer]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZsaXBrYXJ0IFBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e674]
            - generic [ref=e675]: Flipkart Pay
          - link "Image Gift Cards" [ref=e680] [cursor=pointer]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e683]
            - generic [ref=e684]: Gift Cards
          - link "Image Sell Phone" [ref=e689] [cursor=pointer]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e692]
            - generic [ref=e693]: Sell Phone
          - link "Image Plus" [ref=e698] [cursor=pointer]:
            - /url: /plus?param=379289&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBsdXMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
            - img "Image" [ref=e701]
            - generic [ref=e702]: Plus
          - link "Image Originals" [ref=e707] [cursor=pointer]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e710]
            - generic [ref=e711]: Originals
          - link "Image Next-Gen" [ref=e716] [cursor=pointer]:
            - /url: /next-gen-brands-store?param=098124&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQtR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
            - img "Image" [ref=e719]
            - generic [ref=e720]: Next-Gen
          - link "Image SuperCoin" [ref=e725] [cursor=pointer]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
            - img "Image" [ref=e728]
            - generic [ref=e729]: SuperCoin
        - button [ref=e730]
      - generic [ref=e742]:
        - generic [ref=e746]:
          - img "Image" [ref=e749]
          - generic [ref=e750]: Top Value Deals
        - generic [ref=e758]:
          - generic [ref=e759]:
            - link [ref=e765] [cursor=pointer]:
              - /url: /product/p/item?pid=RSFGUZJ8KUPPDBQE&BU=Mixed
              - img "Image" [ref=e774]
            - link [ref=e780] [cursor=pointer]:
              - /url: /all/~cs-8in9ivgw1v/pr?sid=all&collection-tab-name=Toys+and+more+deals+value+365+phase6&valueid=vl%3A05a890617&param=86578889&BU=Mixed
              - img "Image" [ref=e789]
            - link [ref=e795] [cursor=pointer]:
              - /url: /product/p/itme?pid=AFRHMWUMVTNB2CDW&BU=Mixed
              - img "Image" [ref=e804]
            - link [ref=e810] [cursor=pointer]:
              - /url: /product/p/itme?pid=EKTH9HZXM4NK8ZTB&BU=Mixed
              - img "Image" [ref=e819]
            - link [ref=e825] [cursor=pointer]:
              - /url: /product/p/itme?pid=MIXGGHMCGVWQZ3PU&BU=Mixed
              - img "Image" [ref=e834]
            - link [ref=e840] [cursor=pointer]:
              - /url: /exercise-fitness/fitness-accessories/supports/~cs-9o6zxrmaa5/pr?sid=qoc%2Cacb%2Caa3&collection-tab-name=Supports&p%5B%5D=facets.promo%255B%255D%3Dvl%253A05a8940617&droppedD2%5B%5D=5442912d-5f26-4e05-92d1-5ca4c6507009&pageUID=1788441991280&BU=Mixed
              - img "Image" [ref=e849]
            - link [ref=e855] [cursor=pointer]:
              - /url: /product/p/itme?pid=WAPHMGNKB6T9FSZH&BU=Mixed
              - img "Image" [ref=e864]
            - link [ref=e870] [cursor=pointer]:
              - /url: /product/p/itme?pid=EKTFH8FH53NYMCXY&BU=Mixed
              - img "Image" [ref=e879]
            - link [ref=e885] [cursor=pointer]:
              - /url: /bags-wallets-belts/~cs-ezl5l33zij/pr?sid=reh&collection-tab-name=Pouch+Potli&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D499&offer=vl%3A05a8940617&BU=Mixed
              - img "Image" [ref=e894]
            - link [ref=e900] [cursor=pointer]:
              - /url: /product/p/itme?pid=AFRHP53ZWUP4JBEK&BU=Mixed
              - img "Image" [ref=e909]
            - link [ref=e915] [cursor=pointer]:
              - /url: /baby-care/~cs-4qu0z6lg70/pr?sid=kyh&collection-tab-name=Nappy&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D399&param=234567&BU=Mixed
              - img "Image" [ref=e924]
            - link [ref=e930] [cursor=pointer]:
              - /url: /womens-kurtas-kurtis/~cs-snmewubl31/pr?sid=clo%2Ccfv%2Ccib%2Crkt&collection-tab-name=Kurtis&p%5B%5D=facets.discount_range_v1%255B%255D%3D70%2525%2Bor%2Bmore&param=74748&BU=Mixed
              - img "Image" [ref=e939]
            - link [ref=e945] [cursor=pointer]:
              - /url: /product/p/itme?pid=EKTH2Z3QFBFNYDYY&BU=Mixed
              - img "Image" [ref=e954]
          - button [ref=e955]
      - generic [ref=e967]:
        - generic [ref=e968]: Brands in Spotlight
        - generic [ref=e973]:
          - link [ref=e978] [cursor=pointer]:
            - /url: /food-products/~cs-6h4b4mxrur/pr?sid=eat&collection-tab-name=Kelloggs&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=O8I7DMJ3Y0KR_AD&BU=Mixed
            - img "Image" [ref=e981]
          - link [ref=e986] [cursor=pointer]:
            - /url: /beauty-and-grooming/fragrances/deodorants/pr?sid=g9b%2C0yh%2Cvp1&p%5B%5D=facets.brand%255B%255D%3DDenver&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=H1B0XU69GEYF_AD&BU=Mixed
            - img "Image" [ref=e989]
          - link [ref=e994] [cursor=pointer]:
            - /url: /g9b/~cs-28xjqf9i71/pr?sid=g9b&collection-tab-name=minara&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=T9MZV3PWIOV0_AD&BU=Mixed
            - img "Image" [ref=e997]
      - generic [ref=e1009]:
        - link [ref=e1014] [cursor=pointer]:
          - /url: /mivi-duopods-b1-just-launched-45hrs-playtime-ai-enc-hd-call-fast-charging-5-3-bluetooth/p/itmb88189abeb525?pid=ACCH8Z35ZAJSR9CU&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=VRFRGTZE6YKJ_AD&BU=Mixed
          - img "Image" [ref=e1017]
        - link [ref=e1022] [cursor=pointer]:
          - /url: /noise-store?param=998877&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=H6UH8FAQ57T1_AD&BU=Mixed
          - img "Image" [ref=e1025]
        - link [ref=e1030] [cursor=pointer]:
          - /url: /noise-buds-vs102-50-hrs-playtime-11mm-driver-ipx5-unique-flybird-design-bluetooth/p/itm5b1444b835ede?pid=SMWHGSCYEXKYHHZN&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=JAHCSACQKVYA_AD&BU=Mixed
          - img "Image" [ref=e1033]
      - generic [ref=e1043]:
        - generic [ref=e1047]:
          - img "Image" [ref=e1050]
          - generic [ref=e1052]:
            - generic [ref=e1053]: Trending Gadgets & Appliances
            - link [ref=e1055] [cursor=pointer]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1%7Emarketplace%3DFLIPKART%7EwidgetType%3DdealCardV3%7EcontentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
        - generic [ref=e1063]:
          - link "Image True Wireless Min. 50% Off" [ref=e1068] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-6ef68bc8d283b86730515a8f2c87ff23/pr?sid=0pm%2Cfcn%2C821%2Ca7x%2C2si&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1078]
            - generic [ref=e1081]:
              - generic [ref=e1082]: True Wireless
              - generic [ref=e1083]: Min. 50% Off
          - link "Image Neckband Min. 50% Off" [ref=e1088] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-24370be17271c4e43aff0a751ba9e160/pr?sid=0pm%2Cfcn%2C821%2Ca7x%2C2rv&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1098]
            - generic [ref=e1101]:
              - generic [ref=e1102]: Neckband
              - generic [ref=e1103]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e1108] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw%2C79s%2Cby3&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1118]
            - generic [ref=e1121]:
              - generic [ref=e1122]: Trimmers
              - generic [ref=e1123]: Min. 50% Off
          - link "Image Mixer Juicer Grinder Min. 50% Off" [ref=e1128] [cursor=pointer]:
            - /url: https://www.flipkart.com/all/~cs-8b496c9470edf46bfa6b26c32f3aa85a/pr?sid=j9e%2Cm38%2C7ek&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
            - img "Image" [ref=e1138]
            - generic [ref=e1141]:
              - generic [ref=e1142]: Mixer Juicer Grinder
              - generic [ref=e1143]: Min. 50% Off
      - generic [ref=e1145]: Hang on, loading content
      - generic [ref=e1159]:
        - generic [ref=e1160]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1161]: +
      - contentinfo [ref=e1162]:
        - generic [ref=e1164]:
          - generic [ref=e1165]:
            - generic [ref=e1166]:
              - generic [ref=e1167]: ABOUT
              - link "Contact Us" [ref=e1168] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1169] [cursor=pointer]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1170] [cursor=pointer]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1171] [cursor=pointer]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1172] [cursor=pointer]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1173] [cursor=pointer]:
                - /url: /corporate-information
            - generic [ref=e1174]:
              - generic [ref=e1175]: GROUP COMPANIES
              - link "Myntra" [ref=e1176] [cursor=pointer]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1177] [cursor=pointer]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1178] [cursor=pointer]:
                - /url: https://www.shopsy.in
            - generic [ref=e1179]:
              - generic [ref=e1180]: HELP
              - link "Payments" [ref=e1181] [cursor=pointer]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1182] [cursor=pointer]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1183] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1184] [cursor=pointer]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1185]:
              - generic [ref=e1186]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1187] [cursor=pointer]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1188] [cursor=pointer]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1189] [cursor=pointer]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1190] [cursor=pointer]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1191] [cursor=pointer]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1192] [cursor=pointer]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1193] [cursor=pointer]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1194] [cursor=pointer]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1195]:
              - generic [ref=e1196]: "Mail Us:"
              - generic [ref=e1197]:
                - paragraph [ref=e1198]: Flipkart Internet Private Limited,
                - paragraph [ref=e1199]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1200]: Clove Embassy Tech Village,
                - paragraph [ref=e1201]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1202]: Bengaluru, 560103,
                - paragraph [ref=e1203]: Karnataka, India
              - generic [ref=e1204]: "Social:"
              - generic [ref=e1205]:
                - link "Facebook" [ref=e1207] [cursor=pointer]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1208]
                - link "Twitter" [ref=e1210] [cursor=pointer]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1211]
                - link "YouTube" [ref=e1213] [cursor=pointer]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1214]
                - link "Instagram" [ref=e1216] [cursor=pointer]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1217]
            - generic [ref=e1218]:
              - generic [ref=e1219]: "Registered Office Address:"
              - generic [ref=e1220]:
                - paragraph [ref=e1221]: Flipkart Internet Private Limited,
                - paragraph [ref=e1222]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1223]: Clove Embassy Tech Village,
                - paragraph [ref=e1224]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1225]: Bengaluru, 560103,
                - paragraph [ref=e1226]: Karnataka, India
                - paragraph [ref=e1227]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1228]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1229] [cursor=pointer]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1230] [cursor=pointer]:
                    - /url: tel:044-67415800
          - generic [ref=e1231]:
            - generic [ref=e1232]:
              - img "Become a Seller" [ref=e1233]
              - link "Become a Seller" [ref=e1234] [cursor=pointer]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1235]:
              - img "Advertise" [ref=e1236]
              - generic "Advertise" [ref=e1237]
            - generic [ref=e1238]:
              - img "Gift Cards" [ref=e1239]
              - link "Gift Cards" [ref=e1240] [cursor=pointer]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1241]:
              - img "Help Center" [ref=e1242]
              - link "Help Center" [ref=e1243] [cursor=pointer]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1244]: © 2007-2026 Flipkart.com
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