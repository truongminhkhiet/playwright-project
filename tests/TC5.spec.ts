import { test, expect } from '@playwright/test';

test('Playwright Codegen', async ({ page }) => {

  await page.goto('https://portal.kobiton.com/login');
  await page.getByPlaceholder('Username or email').click();
  await page.getByPlaceholder('Username or email').fill('kobitonadmin+businesscloud');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('m15#$ZVJq^foh9oJHY');
  const buttonLogin = await page.waitForSelector(`//button[text()='Login']/../..`);
  await buttonLogin.click();
  await page.getByText('FAVORITEPUBLIC DEVICESPRIVATE').click();
  await page.getByText('PRIVATE & LOCAL DEVICES').click();
  await page.locator('p').filter({ hasText: '13' }).click();
  await page.locator('body').press('Meta+CapsLock');
  await page.locator('body').press('Tab');
  await page.getByLabel('grid').press('Tab');
  await page.getByPlaceholder('Search devices').click();
  await page.getByPlaceholder('Search devices').fill('00008027-001579200E84002E');
  await page.getByText('00008027-001579200E84002E').click();
  await page.getByRole('button', { name: 'Launch' }).click();
  await page.waitForTimeout(15000);
  await page.getByRole('button', { name: 'Install Apps' }).click();
  await page.locator('div:nth-child(4) > .manual__ContainerView-dHoIjb > .manual__ClickViewHolder-kglCdg > .manual__ActionContainer-lgxZLl > .manual__StyledIconButton-jSPifD').click();
  await page.locator('.sc-gCUMDz > path').click();
  await page.locator('div').filter({ hasText: /^Install Apps$/ }).locator('path').nth(2).click();
  await page.getByRole('button', { name: 'Exit Session' }).click();
  
});