import startBrowser from "../browser.js";
import googleScraper from "./googleScraper.js";

//Start the browser and create a browser instance
let browserInstance = await startBrowser();

let args = process.argv[2];
console.log(args);

async function scrapePage(browserInstance, args) {
  let browser,
    preview = null;
  try {
    browser = await browserInstance;
    preview = await googleScraper(browser, args);
  } catch (err) {
    console.log("Could not resolve the browser instance => ", err);
  }
  return preview;
}

// Pass the browser instance to the scraper controller

export default scrapePage(browserInstance, args);
