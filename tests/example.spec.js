import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.instagram.com/?flo=true');
  await page.locator('input[id="_r_2_"]').fill("Loke");
  await page.locator('input[id="_r_5_"]').fill("lokeshalvar@gmail.com");
  await page.getByRole("button", { name: "Submit" }).click();
});