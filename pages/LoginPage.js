//====================================================================
// LoginPage.js
//
// export LoginPage module as middleware
//====================================================================
// 'use strict';

// bring BasePage module as middleware
import BasePage from "./BasePage";

// export HomePage module as middleware (with extends BasePage module)
export default class LoginPage extends BasePage {
    /**
     * visit() method to make sure page displayed(loaded/rendered)
     */
    async visit() {
        // navigate/visit to zero page
        await page.goto('http://zero.webappsecurity.com/login.html');
    };

    /**
     * isLoginFormDisplayed() method to check navbar displayed(loaded/rendered)
     */
    async isLoginFormDisplayed() {
        // wait for login form displayed
        await page.waitForSelector('#login_form');

        // wait for user login displayed
        await page.waitForSelector('#user_login');

        // wait for user password displayed
        await page.waitForSelector('#user_password');
    };

    /**
     * login() method to grant authentication to access to page
     * @param {*} user username to login
     * @param {*} password password to login
     */
    async login(user, password) {
        // wait for login form displayed
        await page.waitForSelector('#login_form');

        // type/input username
        await page.type('#user_login', user);

        // type/input password
        await page.type('#user_password', password);

        // click on button to submit
        await page.click('.btn-primary');
    };
};