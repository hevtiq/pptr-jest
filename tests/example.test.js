//====================================================================
// example.test.js
//
// invoke test suit example include test steps
//====================================================================
'use strict';

// bring TopBar module as middleware
import TopBar from "../pages/components/TopBar";

// bring HomePage module as middleware
import HomePage from "../pages/HomePage";

// invoke test suit example include test steps
describe("Example", () => {
    // book/init a empty var for populate homepage data in scope
    let homepage;

    // book/init a empty var for populate top bar data in scope
    let topbar;

    // setup works before run test steps
    beforeAll(async () => {
        // fix err: Timeout - Async callback was not invoked within the 5000
        // tell jest delay 15s to initialize the home page
        jest.setTimeout(15000);

        // create a new HomePage instance
        homepage = new HomePage();

        // create a new TopBar instance
        topbar = new TopBar();
    });

    // invoke TC-XXX
    it('homepage should work', async () => {
        // invoke method to access/visit to homepage
        await homepage.visit();
    });

    // invoke TC-XXX
    it('navbar should be displayed', async () => {
        // invoke method to check navbar displayed or not
        await homepage.isNavbarDisplayed();

        // invoke method to check topbar displayed or not
        await topbar.isTopBarDisplayed();
    });
});