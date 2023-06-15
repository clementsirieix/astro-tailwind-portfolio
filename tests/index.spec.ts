import {expect, test} from '@playwright/test';

test.describe('Page /', () => {
  test('matches the snapshot', async ({page}) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('index.png', {
      threshold: 0.2,
    });
  });
});
