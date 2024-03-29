import { test, expect } from '@playwright/test';

test("Verify File Upload", async ({page}) => {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("/Users/khiettruong/Desktop/image1.png")

    await page.locator("file-submit").click()

    expect( await page.locator("//h3")).toHaveText("File Uploaded")

})