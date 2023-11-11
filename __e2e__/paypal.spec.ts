import { test, expect } from "@playwright/test";

test("has PayPal", async ({ page }) => {
  await page.goto("/checkout");
  await page.locator("a").filter({ hasText: "Check Out" }).click();

  const paypal = page.getByRole("main", { name: "PayPal" });
  await expect(paypal).toBeHidden();
});
