import { Page } from 'playwright';

export default class ModalForm {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public get closeModalBtn() {return this.page.$('.modal-login-form__close-icon');}
    public get fieldEmail() {return this.page.$('#login-form__email');}
    public  get loginBtn() {return this.page.$('#login-form__login-button');}

    public get fieldPassword() {
        const password = this.page.$('#login-form__password');
        if(password != null) {
            return password;
        } else throw new Error('No Element');
    }

    public async enterEmail(name: string) {
        const element = await this.fieldEmail;
        await element?.fill(name);
    }

    public async enterPassword(name: string) {
        const element = await this.fieldPassword;
        await element?.fill(name);
    }

    public async clickSignIn() {
        const element = await this.loginBtn;
        await element?.click();
    }
}