import { Page } from "@playwright/test";

export class LoginPage{


username

constructor(private page:Page){

    this.username = this.page.getByPlaceholder("Username");
}

async login(username:string){

    await this.username.fill("sas")

}

}