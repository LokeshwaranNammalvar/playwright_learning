# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learning.spec.js >> button checking
- Location: tests\learning.spec.js:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('textbox')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('textbox')

```

```yaml
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - link "Text Box":
      - /url: /text-box
      - img
      - text: Text Box
  - listitem:
    - link "Check Box":
      - /url: /checkbox
      - img
      - text: Check Box
  - listitem:
    - link "Radio Button":
      - /url: /radio-button
      - img
      - text: Radio Button
  - listitem:
    - link "Web Tables":
      - /url: /webtables
      - img
      - text: Web Tables
  - listitem:
    - link "Buttons":
      - /url: /buttons
      - img
      - text: Buttons
  - listitem:
    - link "Links":
      - /url: /links
      - img
      - text: Links
  - listitem:
    - link "Broken Links - Images":
      - /url: /broken
      - img
      - text: Broken Links - Images
  - listitem:
    - link "Upload and Download":
      - /url: /upload-download
      - img
      - text: Upload and Download
  - listitem:
    - link "Dynamic Properties":
      - /url: /dynamic-properties
      - img
      - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- heading "Buttons" [level=1]
- button "Double Click Me"
- button "Right Click Me"
- button "Click Me"
- contentinfo: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | // test('assertion', async({page}) => {
  4  | //   await page.goto('https://demoqa.com/buttons');
  5  | //   await expect(page).toHaveTitle('demosite');
  6  | //   await expect(page).toHaveURL('https://demoqa.com/buttons');
  7  | // })
  8  | 
  9  | test('button checking', async ({page}) => {
  10 |   await page.goto('https://demoqa.com/buttons');
  11 |   const btn = page.getByRole('textbox');
> 12 |   await expect(btn).toBeVisible();
     |                     ^ Error: expect(locator).toBeVisible() failed
  13 | })
```