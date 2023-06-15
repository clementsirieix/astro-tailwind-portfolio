import {expect, test} from '@playwright/test';

test.describe('Page 404', () => {
  test('matches the snapshot', async ({page}) => {
    await page.goto('/random-endpoint-1234567890');
    await page.waitForLoadState('networkidle');

    const screenshot = await page.screenshot();
    expect(screenshot).toMatchSnapshot('404.png', {
      threshold: 0.2,
    });
  });
});
