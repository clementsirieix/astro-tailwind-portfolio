import {expect, test} from '@playwright/test';

test.describe('Page /more', () => {
  test('matches the snapshot', async ({page}) => {
    await page.goto('/more');
    await page.waitForLoadState('networkidle');

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('more.png', {
      threshold: 0.2,
    });
  });
});

test.describe('Page /more/2', () => {
  test('matches the snapshot', async ({page}) => {
    await page.goto('/more/2');
    await page.waitForLoadState('networkidle');

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('more2.png', {
      threshold: 0.2,
    });
  });
});
