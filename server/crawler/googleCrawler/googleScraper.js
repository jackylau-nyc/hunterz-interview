import path from "path";
async function googleScraper(browser, args) {
  let page = await browser.newPage();
  let url = "https://www.google.com/";
  await page.goto(url);
  await page.type(
    "input.gLFyf.gsfi",
    //searchTerm
    args
  );
  page.keyboard.press("Enter");
  await page.waitForSelector("div.g");
  const link = await page.$("div.g div");
  // let value = await page.evaluate((el) => el.innerHTML, link);
  // console.log(value);
  await link.screenshot({ path: "images/screenshot.png" });
  path.resolve("images/screenshot.png");
  await browser.close();
}

export default googleScraper;
