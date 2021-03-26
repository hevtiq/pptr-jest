// bring BasePage as middleware
import BasePage from "./BasePage";

export default class HomePage extends BasePage{
    /**
     * visit() method to make sure page rendered
     */
    async visit() {
        // navigate/visit to zero page
        await page.goto('http://zero.webappsecurity.com');

        // wait for DOM rendered
        await page.waitForSelector('#nav');
    };

    /**
     * isNavbarDisplayed() method to check navbar displayed(loaded/rendered)
     */
    async isNavbarDisplayed() {
        await page.waitForSelector('#pages-nav');
        await page.waitForSelector('#homeMenu');
        await page.waitForSelector('#onlineBankingMenu');
        await page.waitForSelector('#feedback');
    };
};