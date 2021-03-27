//====================================================================
// example.test.js
//
// invoke test suit example include test steps
//====================================================================
// 'use strict';

// bring HomePage module as middleware
import HomePage from "../pages/HomePage";

// bring LoginPage module as middleware
import LoginPage from "../pages/LoginPage";

// bring TopBar module as middleware
import TopBar from "../pages/components/TopBar";

// invoke test suit example include test steps
describe("Example", () => {
    // book/init a empty var for populate homepage data in scope
    let homepage;

    // book/init a empty var for populate login page data in scope
    let loginpage;

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

        // create a new LoginPage instance
        loginpage = new LoginPage();
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

    // invoke TC-XXX (test.only)
    it('try to login', async () => {
        // invoke method to access/visit to login page
        await loginpage.visit();

        // invoke method to check form displayed or not
        await loginpage.isLoginFormDisplayed();

        // invoke method login to grant access
        await loginpage.login('username', 'password');

        // invoke method pause with delay time (BasePage module)
        await loginpage.wait(5000);
    });
});