async function appointmentScraper(browser) {
  let page = await browser.newPage();
  let url =
    "https://www.sharp.com/health-classes/volunteer-registration-grossmont-center-covid-19-vaccine-clinic-2558";
  await page.goto(url);
  await page.onload;
  let availableCenters = await page.setTimeout(() => {
    page.$$(".section-more-info");
  }, 5000);

  await browser.close();
  return availableCenters;
}

export default appointmentScraper;
