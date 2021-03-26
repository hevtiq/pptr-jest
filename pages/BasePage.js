//====================================================================
// BasePage.js
// inheritance module as middleware in pages
//====================================================================
export default class BasePage {
    /**
     * wait() method to pause next processing
     * @param {*} time timeout when load page
     */
    async wait(time) {
        await page.waitForTimeout(time);
    };

    /**
     * getTitle() method to grab page title
     * @returns page title
     */
    async getTitle() {
        return await page.title();
    };

    /**
     * getUrl() method to grab page url
     * @returns page url
     */
    async getUrl() {
        return await page.url();
    };
};