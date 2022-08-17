const PageLoginObject = require('../../page.Objects/page.Login.Object');
const PageAdditionDeductionObject = require('../../page.Objects/page.AdditionDeduction.Object');
const FiltersAdditionDeductionObject = require('../../components.Objects/extendFilters.Objects/filters.AdditionDeduction.Object');
const constants = require('../../documentation/constants');


describe ('Addition Deduction Page. Category filters tests',  () => {

    before(async () => {
        await PageLoginObject.login();
        await PageAdditionDeductionObject.open();
        await PageAdditionDeductionObject.buttonFilters.click()
    });

    it('Filters list should be displayed after clicking button Filters on Addition Deduction Page', async () => {
        await  browser.refresh();
        await PageAdditionDeductionObject.buttonFilters.click();

        expect(await FiltersAdditionDeductionObject.listFilters.isClickable()).toBe(true);
    });

    it('User can filter Addition/Deduction by Expense Category', async () => {
        const badgeFilter = await FiltersAdditionDeductionObject.filterByCategory(constants.CATEGORY_EXPENSE);
        const badgeText = await badgeFilter.getText();
        await FiltersAdditionDeductionObject.clearAll();

        expect(badgeText).toContain(constants.CATEGORY_EXPENSE);
    });

    it('User can filter Addition/Deduction by Expense sub Category ', async () => {
        const badgeFilter = await FiltersAdditionDeductionObject.filterByCategory(constants.CATEGORY_EXPENSE_SUB);
        const badgeText = await badgeFilter.getText();
        await FiltersAdditionDeductionObject.clearAll();

        expect(badgeText).toContain(constants.CATEGORY_EXPENSE_SUB +'          Sub-account of Internet');
    });

    it('User can filter Addition/Deduction by Escrow Category', async () => {
        const badgeFilter = await FiltersAdditionDeductionObject.filterByCategory(constants.CATEGORY_ESCROW);
        const badgeText = await badgeFilter.getText();
        await FiltersAdditionDeductionObject.clearAll();

        expect(badgeText).toContain(constants.CATEGORY_ESCROW);
    });

    it('User can filter Addition/Deduction by Loan Category', async () => {
        const badgeFilter = await FiltersAdditionDeductionObject.filterByCategory(constants.CATEGORY_LOAN);
        const badgeText = await badgeFilter.getText();
        await FiltersAdditionDeductionObject.clearAll();

        expect(badgeText).toContain(constants.CATEGORY_LOAN);
    });

    it('User can filter Addition/Deduction by Loan sub Category', async () => {
        const badgeFilter = await FiltersAdditionDeductionObject.filterByCategory(constants.CATEGORY_LOAN_SUB);
        const badgeText = await badgeFilter.getText();
        await FiltersAdditionDeductionObject.clearAll();

        expect(badgeText).toContain(constants.CATEGORY_LOAN_SUB + '          Sub-account of Driver loan');
    });
});