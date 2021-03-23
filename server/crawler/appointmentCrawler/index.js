import startBrowser from "../browser.js";
import appointmentScraper from "./appointmentScraper.js";

//Start the browser and create a browser instance
let browserInstance = await startBrowser();

async function scrapePage(browserInstance) {
  let browser,
    available = null;
  try {
    browser = await browserInstance;
    available = await appointmentScraper(browser);
  } catch (err) {
    console.log(err);
  }
  console.log(available);
}

// Pass the browser instance to the scraper controller

export default scrapePage(browserInstance);
