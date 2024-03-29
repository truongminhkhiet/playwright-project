import { test, expect } from '@playwright/test';
    
test("Verify Error Message", async function ({page}){

    await page.goto("https://portal.kobiton.com/login")
    const loginInput = await page.waitForSelector('//input[@placeholder="Username or email"]');
    await loginInput.type('kobitonadmin+businesscloud');
    const passwordInput = await page.waitForSelector('//input[@placeholder="Password"]');
    await passwordInput.type('1');
    const buttonLogin = await page.waitForSelector(`//button[text()='Login']/../..`);
    await buttonLogin.click();
    const errorMessage = await page.locator("//div[@class='login__ErrorMessage-kRSmbI gEXaJO']").textContent();
    console.log("Error message is " + errorMessage)
    expect(errorMessage?.includes("Invalid")).toBeTruthy();

})