//====================================================================
// end-to-end.test.js
//
// invoke test suit end-to-end test include test steps
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

// bring variables from configuration as middleware
import { username, password, timeout } from "../config";

// invoke test suit end-to-end test include test steps
describe("End-To-End Test", () => {
    // book/init a empty var for populate homePage data in scope
    let homePage;

    // book/init a empty var for populate login page data in scope
    let loginPage;

    // book/init a empty var for populate login page data in scope
    let feedbackPage;

    // book/init a empty var for populate top bar data in scope
    let topBar;

    // setup works before run test steps
    beforeAll(async () => {
        // fix err: Timeout - Async callback was not invoked within the 5000
        // tell jest delay 15s to initialize the home page
        jest.setTimeout(timeout);

        // create a new HomePage instance
        homePage = new HomePage();

        // create a new LoginPage instance
        loginPage = new LoginPage();

        // create a new FeedbackPage instance
        feedbackPage = new FeedbackPage();

        // create a new TopBar instance
        topBar = new TopBar();
    });

    // invoke TC-XXX
    it('should load home page', async () => {
        // invoke method to access/visit to homepage
        await homePage.visit();

        // invoke method to check navbar displayed or not
        await homePage.isNavbarDisplayed();
    });

    // invoke TC-XXX
    it('should submit feedback', async () => {
        // invoke method to click feedback link
        await homePage.clickFeedbackLink();

        // invoke method to check form displayed or not
        await feedbackPage.isFeedbackFormDisplayed();

        // invoke method login to grant access
        await feedbackPage.submitFeedback(
            'vnPace',
            'dev@vnpace.dev',
            'subject',
            'comment',
        );
    });

    // invoke TC-XXX
    it('should login to application', async () => {
        // invoke method to visit to home page
        await homePage.visit();

        // invoke method to check top bar displayed or not
        await topBar.isTopBarDisplayed();

        // invoke method to click on sign in button
        await topBar.clickSignInButton();

        // invoke method to check login form displayed or not
        await loginPage.isLoginFormDisplayed();

        // invoke method to login to grant access
        await loginPage.login(username, password);
    });
});