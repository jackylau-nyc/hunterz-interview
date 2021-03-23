import pkg from "puppeteer";
const { launch } = pkg;

async function startBrowser() {
  let browser;
  try {
    browser = await pkg.launch({
      headless: false,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

export default startBrowser;
