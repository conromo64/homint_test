//import { test } from ('@playwright/test');
const { test, expect } = require('@playwright/test');



//( async() =>{
    test("Add products to basket", async({ page }) => {
    
    //const browser = await chromium.launch({headless:false, slowMo: 1000});
    //const page = await browser.newPage();
    // see the playwright.config.js file in the baseURL parameter
    await page.goto("/");
    //await page.goto("localhost:2221");
    const addToBasket = page.locator('[data-qa="product-button"]').first();
    await addToBasket.waitFor();
    await addToBasket.click();

    const basketCounter = page.locator('[data-qa="header-basket-count"]');
    //await addToBasket2.waitFor();
    //await addToBasket2.click();
    await expect(basketCounter).toHaveText("1")
    const checkOutLink = page.getByRole('link', { name: 'Checkout' });
    await checkOutLink.click();
    await page.waitForURL("/basket");
    //await page.pause();
}) 

