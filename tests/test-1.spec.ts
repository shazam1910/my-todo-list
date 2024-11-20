
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByPlaceholder('Enter new task').click();
  await page.getByPlaceholder('Enter new task').fill('s');

  await expect(page.getByPlaceholder('Enter new task')).toHaveValue('s');

  await page.getByRole('button', { name: 'ADD TASK' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByPlaceholder('Enter new task').click();
  await page.getByPlaceholder('Enter new task').fill('s');

  await expect(page.getByPlaceholder('Enter new task')).toHaveValue('s');

  await page.getByRole('button', { name: 'ADD TASK' }).click();
});
