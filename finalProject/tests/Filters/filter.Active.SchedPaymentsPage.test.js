const PageLoginObject = require('../../page.Objects/page.Login.Object');
const PageScheduledPaymentsObject = require('../../page.Objects/page.ScheduledPayments.Object');
const FiltersScheduledPaymentsObject = require('../../components.Objects/extendFilters.Objects/filters.ScheduledPayments.Object');
const DatatableScheduledPaymentsObject = require('../../components.Objects/datatables.Objects/datatable.ScheduledPayments.Object');

// Now there is the bugs. They will be fixed in the next release

describe ('Scheduled Payments Page. Active/Inactive filters tests.',  () => {

    before(async () => {
        await PageLoginObject.login();
        await PageScheduledPaymentsObject.open();
        // await ScheduledPaymentsPage.buttonFilters.click()
    });

    it('Scheduled Payments Page. Filters list should be displayed after clicking button Filters', async () => {
        await  browser.refresh();
        await PageScheduledPaymentsObject.buttonFilters.click();

        expect(await FiltersScheduledPaymentsObject.listFilters.isClickable()).toBe(true);
    });

    it('Scheduled Payments Page has filter Active', async () => {
        const filterGroup = await FiltersScheduledPaymentsObject.filterGroupActive;

        expect(await filterGroup.isClickable()).toBe(true);
    });

    it('All Rows in the table Scheduled Payments has status badge', async () => {
        await browser.pause(3000);
        const allRows = await DatatableScheduledPaymentsObject.allTableRows.length;
        const pausedBadges = await DatatableScheduledPaymentsObject.allPausedBadges.length;
        const activeBadges = await DatatableScheduledPaymentsObject.allActiveBadges.length;
        const inactiveBadges = await DatatableScheduledPaymentsObject.allInactiveBadges.length;
        const finishedBadges = await DatatableScheduledPaymentsObject.allFinishedBadges.length;
        const sum = activeBadges + pausedBadges + inactiveBadges + finishedBadges;

        console.log(`allRows: ${allRows},
         PausedBadges: ${pausedBadges}, ActiveBadges: ${activeBadges},
          InactiveBadges: ${inactiveBadges}, FinishedBadges.length: ${finishedBadges}`);

        expect(sum).toBe(allRows - 1);
    });

    it('Status Active should have green background-color',  async () => {
        await DatatableScheduledPaymentsObject.allActiveBadges[0].waitForClickable({timeout: 3000});
        const color = await (DatatableScheduledPaymentsObject.allActiveBadges[0]).getCSSProperty('background-color');

        expect(color.value).toBe('rgba(82,188,121,1)');
    });

    it('Status Inactive should be orange',  async () => {
        await DatatableScheduledPaymentsObject.allInactiveBadges[0].waitForClickable({timeout: 3000});
        const color = await (DatatableScheduledPaymentsObject.allInactiveBadges[0]).getCSSProperty('color');

        expect(color.value).toBe('rgba(245,165,36,1)');
    });

    it('Status Finished should be green',  async () => {
        await DatatableScheduledPaymentsObject.allFinishedBadges[0].waitForClickable({timeout: 3000});
        const color = await (DatatableScheduledPaymentsObject.allInactiveBadges[0]).getCSSProperty('color');

        expect(color.value).toBe('rgba(245,165,36,1)');
    });

    it('Status Active - Yes shows only Active and Paused tasks', async () => {
        await FiltersScheduledPaymentsObject.arrowActiveDropdown.click();
        await browser.keys('Yes');
        await browser.keys('Enter');
        await FiltersScheduledPaymentsObject.buttonApply.click();
        await browser.pause(2000);
        const allRows = await DatatableScheduledPaymentsObject.allTableRows.length;

        const activeBadges = await DatatableScheduledPaymentsObject.allActiveBadges.length;
        const pausedBadges = await DatatableScheduledPaymentsObject.allPausedBadges.length;
        const sum = activeBadges + pausedBadges;

        console.log(`allRows: ${allRows},
          InactiveBadges: ${activeBadges}, FinishedBadges.length: ${pausedBadges}`);

        expect(sum).toBe(allRows - 1);
    });

    it('Status Active - No shows only Inactive and Finished tasks', async () => {
        await FiltersScheduledPaymentsObject.arrowActiveDropdown.click();
        await browser.keys('No');
        await browser.keys('Enter');
        await FiltersScheduledPaymentsObject.buttonApply.click();
        await browser.pause(2000);
        const allRows = await DatatableScheduledPaymentsObject.allTableRows.length;

        const inactiveBadges = await DatatableScheduledPaymentsObject.allInactiveBadges.length;
        const finishedBadges = await DatatableScheduledPaymentsObject.allFinishedBadges.length;
        const sum = inactiveBadges + finishedBadges;

        console.log(`allRows: ${allRows},
          InactiveBadges: ${inactiveBadges}, FinishedBadges.length: ${finishedBadges}`);

        expect(sum).toBe(allRows - 1);
    });

});