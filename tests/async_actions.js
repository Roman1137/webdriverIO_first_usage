"use strict";
/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
//import 'webdriverio';
describe("async actions", () => {
    beforeEach(() => {
        browser.url("https://www.seleniumhq.org/");
    });
    it('should work', () => {
        debugger;
        const title = browser.getTitle();
        let mainContentElement = $("#mainContent + h2");
        mainContentElement.waitForDisplayed(5000);
        let projectsElement = $("#menu_projects");
        projectsElement.click();
        browser.pause(3000);
        let seleniumProjectsHeader = $('h2');
        seleniumProjectsHeader.waitForDisplayed(5000);
        let text = $("a[href='remote-control/']").getText();
        chai_1.expect(text).to.contain("Selenium Remote Control");
        console.log(text);
    });
});
//# sourceMappingURL=async_actions.js.map