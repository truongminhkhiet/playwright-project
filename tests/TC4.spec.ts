import { test, expect } from '@playwright/test';

test("Verify Application Tittle", async ({page}) => {

    await page.goto("https://portal.kobiton.com")
    const url = await page.url()
    console.log("URL is "+ url)
    const title = await page.title()
    console.log("Title is "+ title)
    await expect(page).toHaveTitle("Kobiton")
    
})