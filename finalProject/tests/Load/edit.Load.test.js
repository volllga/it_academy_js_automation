const LoginPage = require('../../page.Objects/login.page');
const InlineForm = require('../../components.Objects/loadsInlineForm');
const PageLoadsObject = require('../../page.Objects/page.Loads.Object');

describe ('Loads Page. Edit Load',  () => {
  before(async () => {
    await LoginPage.login();
    await PageLoadsObject.open();
  });

  it('Double click opens Edit Load inline Form', async () => {
    const cell = await $('.loads-table-row:nth-child(1) td:nth-child(4)');
    await cell.doubleClick();

    await expect(InlineForm.title).toHaveTextContaining('edit Load');
  });
});