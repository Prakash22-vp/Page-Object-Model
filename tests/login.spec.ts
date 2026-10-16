import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/Loginpage';

import { validUser,invalidUser,lockedUser,adminUser,problemUser } from '../test-data/loginData';



test.beforeEach(async ({ page }) => {
    const baseURL = process.env.BASE_URL;

    if (!baseURL) {
        throw new Error('BASE_URL is missing from the .env file');
    }

    await page.goto(baseURL);
});


test('Login test', async ({ page }) => {

    const loginpage= new LoginPage(page)

    

    await loginpage.login(validUser.username, validUser.password);

    await expect(page).toHaveURL(/inventory\.html/);

    await page.context().storageState({
    path: 'playwright/.auth/user.json'
});

}
);


test('Login with invalid password', async ({ page }) => {

const loginpage= new LoginPage(page)


   

    await loginpage.login(validUser.username, invalidUser.password);

    await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service");



});


test('Login with locked-out user',async({page})=>{

    const loginpage= new LoginPage(page)

     

     await loginpage.login(lockedUser.username,lockedUser.password)

     await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');



})


test('Login with admin user',async({page})=>{

    const loginpage= new LoginPage(page)

    await loginpage.login(adminUser.username,adminUser.password)

   await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: Username and password do not match any user in this service");
})


test('Login with Problem User', async({page})=>{

    const Loginpage= new LoginPage(page)

    await Loginpage.login(problemUser.username,problemUser.password)

    await expect(page).toHaveURL(/inventory\.html/);

})

test.afterEach(async ({ page }) => {
    console.log('Test completed');
});

test.afterAll(() => {
    console.log('Login test suite completed');
});