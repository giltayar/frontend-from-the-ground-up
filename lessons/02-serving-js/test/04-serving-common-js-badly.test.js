import {test, expect} from '@playwright/test'

test('04-serving-common-js-badly', async ({page}) => {
  await page.goto('/04-serving-common-js-badly/')

  await expect(page.locator('h1')).toHaveText('Random Quote (script tag that fails to import Common JS)')
  await expect(page.locator('p')).toBeEmpty()
})
