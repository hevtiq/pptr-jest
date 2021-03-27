//====================================================================
// HomePage.js
//
// export HomePage module as middleware
//====================================================================
'use strict';

// bring BasePage module as middleware
import BasePage from "./BasePage";

// export HomePage module as middleware (with extends BasePage module)
export default class HomePage extends BasePage{
    /**
     * visit() method to make sure page displayed(loaded/rendered)
     */
    async visit() {
        // navigate/visit to zero page
        await page.goto('http://zero.webappsecurity.com');

        // wait for DOM displayed
        await page.waitForSelector('#nav');
    };

    /**
     * isNavbarDisplayed() method to check navbar displayed(loaded/rendered)
     */
    async isNavbarDisplayed() {
        // wait for pages nav displayed
        await page.waitForSelector('#pages-nav');

        // wait for home menu displayed
        await page.waitForSelector('#homeMenu');

        // wait for online banking menu displayed
        await page.waitForSelector('#onlineBankingMenu');

        // wait for feedback displayed
        await page.waitForSelector('#feedback');
    };

    /**
     * clickHomePageLink() method to click on home menu
     */
    async clickHomePageLink() {
        // click on home menu
        await page.click('#homeMenu');
    };

    /**
     * clickOnlineBankingLink() method to click on online banking menu
     */
    async clickOnlineBankingLink() {
        // click on online banking menu
        await page.click('#onlineBankingMenu');
    };

    /**
     * clickFeedbackLink() method to click on feedback menu
     */
    async clickFeedbackLink() {
        // click on feedback
        await page.click('#feedback');
    };
};