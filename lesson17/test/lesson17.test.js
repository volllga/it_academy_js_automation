//с помощью selenium-webdriver написать тест:
// 1) зайти на сайт https://chromedriver.chromium.org/home
// 2) проверить текст основного тайтла "ChromeDriver"
// 3) кликнуть в хедере на пункт "Chrome Extencions"
// 4) сделать хайлайт для нового основного тайтла
// 5) проверить что новый тайтл стал "Chrome Extencions"
// 6. Перейти на страницу поиска
// 7. Ввести driver в поиск
// 8. Проверить что первая ссылка содержит слово driver
// Задание оценивается из 9 баллов

const { Builder, By, Key} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
const chai = require("chai");
const assert = chai.assert;

const homePageTitle = "ChromeDriver - WebDriver for Chrome";
const chromeExtensionsPageTitle = "ChromeDriver - WebDriver for Chrome - Chrome Extensions";


async function checkPageTitle(expectTitle) {
  const title = await driver.getTitle();
  assert.equal(title, expectTitle);
}

async function checkH1Text(expectedText){
  // находим h1 элемент получаем текст элемента
  let h1Text = await driver.findElement(By.xpath("//h1/span")).getText();
  // выведем текст в консоль для отладки теста
  console.log(h1Text, expectedText);
  // проверим текст на соответствие
  assert.equal(h1Text, expectedText);
}

describe.only("lesson 17 homework", function () {

  before(async () => {
    // 1) зайти на сайт https://chromedriver.chromium.org/home
    await driver.get("https://chromedriver.chromium.org/home");
    // развернуть окно
    await driver.manage().window().maximize();
  });

  // проверяем тайтл страницы
  it("Page title should be equil to ChromeDriver - WebDriver for Chrome", () => {
    checkPageTitle(homePageTitle);
  });

  // 2) проверить текст основного тайтла "ChromeDriver"
  it("Page h1 element should have text \"ChromeDriver\"", async () => {
    await checkH1Text("ChromeDriver");
  });

//  3) кликнуть в хедере на пункт "Chrome Extencions"
  it("click Chrome Extensions", async () => {
    const dropdown = await driver.findElement(By.css(".oXBWEc > .PsKE7e [jscontroller=\"yUHiM\"]"));
    const extensions = await driver
      .findElement(By.xpath("//*[@class=\"PsKE7e qV4dIc Qrrb5 YSH9J\"]//a[text()=\"Chrome Extensions\"]"));
    await driver.actions().click(dropdown).perform();
    await driver.actions().click(extensions).perform();
  });

  // проверяем тайтл страницы
  it("Page title should be equil to ChromeDriver - WebDriver for Chrome - Chrome Extensions", () => {
    checkPageTitle(chromeExtensionsPageTitle);
  });

  // 4) сделать хайлайт для нового основного тайтла
  it("HighLight new Title", async () => {
    const title = await driver.findElement(By.css(".jXK9ad-SmKAyb .Rn3Z1b"));
    driver.executeScript("arguments[0].style.backgroundColor = 'green'", title);
    await driver.sleep(2000);
  });

  // 5) проверить что новый тайтл стал "Chrome Extencions"
  it("Page h1 element should have text \"Chrome Extensions\"", async () => {
    await checkH1Text("Chrome Extensions");
  });

  it("Serch", async () => {
    // 6. Перейти на страницу поиска
    await  driver.get("https://chromedriver.chromium.org/_/search");
    const sershField = await driver.findElement(By.css("[type=\"search\"]"));
    // 7. Ввести driver в поиск
    await sershField.sendKeys("driver", Key.ENTER);
    await driver.sleep(1000);

    // 8. Проверить что первая ссылка содержит слово driver
    const link = await driver.findElement(By.xpath("//*[@class=\"lZsZxe\"]//a[1]")).getAttribute("href");
    // выведем линк в консоль для отладки теста
    console.log(link);
    assert.isTrue(link.includes("driver"));
  });


  after( async () => {
    await driver.quit();
  });
});