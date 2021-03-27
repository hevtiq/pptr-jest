module.exports = {
    launch: {
        headless: true,  // set to true when run scripts only
        ignoreHTTPSErrors: true,
        args: ["--ignore-certificate-errors"],
    },
    browserContext: "default",
};