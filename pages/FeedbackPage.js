//====================================================================
// Feedback.js
//
// export Feedback module as middleware
//====================================================================
'use strict';

// bring BasePage module as middleware
import BasePage from "./BasePage";

// export Feedback module as middleware (with extends BasePage module)
export default class FeedbackPage extends BasePage {
    /**
     * visit() method to make sure page displayed(loaded/rendered)
     */
    async visit() {
        // navigate/visit to feedback page
        await page.goto('http://zero.webappsecurity.com/feedback.html');
    };

    /**
     * isFeedbackFormDisplayed() method to check navbar displayed(loaded/rendered)
     */
    async isFeedbackFormDisplayed() {
        // wait for name field displayed
        await page.waitForSelector('#name');

        // wait for email field displayed
        await page.waitForSelector('#email');

        // wait for subject field displayed
        await page.waitForSelector('#subject');

        // wait for comment field displayed
        await page.waitForSelector('#comment');
    };

    /**
     * submitFeedback() method to submit feedback
     */
    async submitFeedback(name, email, subject, comment) {
        // type/input name
        await page.type('#name', name)

        // type/input email
        await page.type('#email', email)

        // type/input subject
        await page.type('#subject', subject)

        // type/input comment
        await page.type('#comment', comment)

        // click on submit button
        await page.click('input[type="submit"]');
    };
};