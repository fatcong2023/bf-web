import { test, expect } from '@playwright/test'

test('home navigation and direct SPA routes work', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Sugar Sense')
  await expect(page.locator('h1')).toHaveText('Sugar Sense')

  await page.getByRole('link', { name: 'Support' }).click()
  await expect(page).toHaveURL(/\/support$/)
  await expect(page.locator('h1')).toHaveText('Support')

  await page.goto('/privacy')
  await expect(page).toHaveURL(/\/privacy$/)
  await expect(page.locator('h1')).toHaveText('Privacy Policy')
})
