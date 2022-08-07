import { Page } from 'playwright';
export default class HomePage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators. There are different methods for exercise reason

    public get trialFieldName() {
        const fieldName = this.page.$('#trial-form__name');
        if(fieldName != null) {
            return fieldName;
        } else throw new Error('No Element');
    }

    public get trialFieldCompany() {
        const fieldCompany = this.page.$('#trial-form__company');
        if(fieldCompany != null) {
            return fieldCompany;
        } else throw new Error('No Element');
    }
    public get trialHeader() {return this.page.$('#trial-form__server-message');}
    public get trialSubmitBtn() {return this.page.$('#trial-form__submit');}
    trialFieldPhone = async () => await this.page.$('#trial-form__phone');
    trialFieldEmail = async () => await this.page.$('#trial-form__email');
    contestFormTitle = async () => await this.page.$('#trial-confirmation__adds-questions-form h4');


    // Methods
    public async getTrialHeader() {
        const trial = await this.trialHeader;
        if(trial != null) {
            return await trial.innerText();
        } else throw new Error('No Element');
    }

    public async enterName(name: string) {
        const element = await this.trialFieldName;
        await element?.fill(name);
    }

    public async enterCompany(name: string) {
        const element = await this.trialFieldCompany;
        await element?.fill(name);
    }

    public async enterPhone(phone: string) {
        const element = await this.trialFieldPhone();
        await element?.fill(phone);
    }

    public async enterEmail(email: string) {
        const element = await this.trialFieldEmail();
        await element?.fill(email);
    }

    public async clickSignUp() {
        const element = await this.trialSubmitBtn;
        await element?.click();
    }

    public async fillTrialForm(name: string, company: string, phone: string, email: string) {
        await this.enterName(name);
        await this.enterCompany(company);
        await this.enterPhone(phone);
        await this.enterEmail(email);
        await this.clickSignUp();
    }
}

