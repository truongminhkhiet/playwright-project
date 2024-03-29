    import { test, expect } from '@playwright/test';
    
    test("Valid Login", async function ({page}){

    await page.goto("https://portal.kobiton.com/login")
    const loginInput = await page.waitForSelector('//input[@placeholder="Username or email"]');
    await loginInput.type('kobitonadmin+businesscloud');
    const passwordInput = await page.waitForSelector('//input[@placeholder="Password"]');
    await passwordInput.type('m15#$ZVJq^foh9oJHY');
    const buttonLogin = await page.waitForSelector(`//button[text()='Login']/../..`);
    await buttonLogin.click();
    await page.waitForNavigation();
    const elementText = await page.$eval('//div[@class="account-settings__AccountName-hEpnXM hVzZff"]', element => element.textContent);
    expect(elementText).toContain("Kobiton BusinessCloud");
    const profilePicture = await page.waitForSelector(`//img[@class='side-bar__AvatarImg-cNUTFu giURkN']`);
    await profilePicture.click();
    const logoutButton = await page.waitForSelector(`//span[normalize-space()='Logout']`);
    await logoutButton.click();
    await expect(page).toHaveURL("https://portal.kobiton.com/login")

})

