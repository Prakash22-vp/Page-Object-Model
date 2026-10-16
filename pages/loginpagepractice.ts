import {Page} from '@playwright/test'

export class Loginpage{

    Username

    constructor(private page:Page){

        this.Username= this.page.getByPlaceholder("Username")
    }


    async login(Username:string){

        await this.Username.fill(Username)
    
}
}
