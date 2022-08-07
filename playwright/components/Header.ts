import { Page } from 'playwright';
export default class Header {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators

    public get burgerBtn() {
        const burger = this.page.$('#header__burger-menu');
        if(burger != null) {
            return burger;
        } else throw new Error('No Element');
    }

    public get singInBtn() {
        const signIn = this.page.$('#header__signin-button');
        if(signIn != null) {
            return signIn;
        } else throw new Error('No Element');
    }

    public get logOutBtn() {
        const logOut= this.page.$('text=Log out');
        if(logOut != null) {
            return logOut;
        } else throw new Error('No Element');
    }

    public get nawDropdownLabel() {return  this.page.$('#header__dropdown-label');}

    public async getUserName() {
        await this.openNawMenu();
        const name = await this.nawDropdownLabel;
        if(name != null) {
            return await name.innerText();
        } else throw new Error('No Element');
    }

    // Methods

    public async openNawMenu() {
        await this.page.reload(); // in case of nav menu already opened
        const burger = await this.burgerBtn;
        await burger?.click();
    }

    public async openLogInForm() {
        await this.openNawMenu();
        const signIn= await this.singInBtn;
        await signIn?.click();
    }

    public async logOut() {
        await this.openNawMenu();
        const logOut= await this.logOutBtn;
        await logOut?.click();
    }
}