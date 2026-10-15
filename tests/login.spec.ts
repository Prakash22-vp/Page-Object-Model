import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/Loginpage';

import { validUser,invalidUser,lockedUser } from '../test-data/loginData';




test('Login test', async ({ page }) => {

    const loginpage= new LoginPage(page)

    await page.goto("https://www.saucedemo.com/");

    await loginpage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/inventory\.html/);

}
);


test('Login with invalid password', async ({ page }) => {

const loginpage= new LoginPage(page)


    await page.goto('https://www.saucedemo.com/');

    await loginpage.login(validUser.username, invalidUser.password);

    await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service");



});


test('Login with locked-out user',async({page})=>{

    const loginpage= new LoginPage(page)

     await page.goto('https://www.saucedemo.com/');

     await loginpage.login(lockedUser.username,lockedUser.password)

     await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');



})