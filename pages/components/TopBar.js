//====================================================================
// TopBar.js
//
// export TopBar module as middleware
//====================================================================
'use strict';

// export TopBar module as middleware
export default class TopBar {
    /**
     * isTopBarDisplayed() method to check top bar displayed(loaded/rendered)
     */
    async isTopBarDisplayed() {
        // wait for brand displayed
        await page.waitForSelector('.brand');

        // wait for sign in button displayed
        await page.waitForSelector('#signin_button');
    };

    /**
     * clickSignInButton() method to click on sign in button
     */
    async clickSignInButton() {
        // click on sign in button
        await page.click('#signin_button');
    };
};