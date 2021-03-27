//====================================================================
// example.test.js
//
// invoke test suit example include test steps
//====================================================================
'use strict';

// bring HomePage module as middleware
import HomePage from "../pages/HomePage";

// bring LoginPage module as middleware
import LoginPage from "../pages/LoginPage";

// bring FeedbackPage module as middleware
import FeedbackPage from "../pages/FeedbackPage";

// bring TopBar module as middleware
import TopBar from "../pages/components/TopBar";

// invoke test suit example include test steps
describe("Example", () => {
    // book/init a empty var for populate homePage data in scope
    let homePage;

    // book/init a empty var for populate login page data in scope
    let loginPage;

    // book/init a empty var for populate login page data in scope
    let feedbackPage;

    // book/init a empty var for populate top bar data in scope
    let topbar;

    // setup works before run test steps
    beforeAll(async () => {
        // fix err: Timeout - Async callback was not invoked within the 5000
        // tell jest delay 15s to initialize the home page
        jest.setTimeout(15000);

        // create a new HomePage instance
        homePage = new HomePage();

        // create a new LoginPage instance
        loginPage = new LoginPage();

        // create a new FeedbackPage instance
        feedbackPage = new FeedbackPage();

        // create a new TopBar instance
        topbar = new TopBar();
    });

    // invoke TC-XXX
    it('homepage should work', async () => {
        // invoke method to access/visit to homepage
        await homePage.visit();
    });

    // invoke TC-XXX
    it('navbar should be displayed', async () => {
        // invoke method to check navbar displayed or not
        await homePage.isNavbarDisplayed();

        // invoke method to check topbar displayed or not
        await topbar.isTopBarDisplayed();
    });

    // invoke TC-XXX (test.only)
    it('try to login', async () => {
        // invoke method to access/visit to login page
        await loginPage.visit();

        // invoke method to check form displayed or not
        await loginPage.isLoginFormDisplayed();

        // invoke method login to grant access
        await loginPage.login('username', 'password');

        // invoke method pause with delay time (BasePage module)
        await loginPage.wait(5000);
    });

    // invoke TC-XXX (test.only)
    it('feedback should work', async () => {
        // invoke method to access/visit to feedback page
        await feedbackPage.visit();

        // invoke method to check form displayed or not
        await feedbackPage.isFeedbackFormDisplayed();

        // invoke method login to grant access
        await feedbackPage.submitFeedback(
            'vnPace',
            'dev@vnpace.dev',
            'subject',
            'comment',
        );

        // invoke method pause with delay time (BasePage module)
        await feedbackPage.wait(5000);
    });
});