import { Page } from '@playwright/test';

export class LoginPage {
    username
    password
    loginButton

    constructor(private page: Page) {
        this.username = this.page.getByPlaceholder("Username");
        this.password= this.page.locator('#password')
        this.loginButton= this.page.locator('#login-button')
      
  
    }

    async login(username:string,password:string){

        await this.username.fill(username)

        await this.password.fill(password)

        await this.loginButton.click();
    
}
}

