// bring HomePage module as middleware
import HomePage from "../pages/HomePage";

// invoke test suit example
describe("Example", () => {
    // book/init a empty var for populate data in scope
    let homepage;

    // setup works before run test steps
    beforeAll(async () => {
        // fix err: Timeout - Async callback was not invoked within the 5000
        // tell jest delay 15s to initialize the home page
        jest.setTimeout(15000);

        // create a new HomePage instance
        homepage = new HomePage();
    });

    // invoke TC-XXX
    it('homepage should work', async () => {
        // invoke method to access/visit to homepage
        await homepage.visit();
    });

    // invoke TC-XXX
    it('navbar should be displayed', async () => {
        // invoke method to check navbar display
        await homepage.isNavbarDisplayed();
    });
});