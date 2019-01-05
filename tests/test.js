"use strict";
/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
describe("sdsdsd", () => {
    before(() => {
        browser.url("http://google.com");
    });
    it('should ', () => {
        //debugger;
        const title = browser.getTitle();
        chai_1.expect(title).to.contain("Google");
        browser.pause(1000);
        let element = $("[class='gLFyf gsfi']");
        element.waitForDisplayed(5000);
        element.setValue("protractor");
        browser.pause(1000);
        $("[name=btnK]").click();
        browser.pause(1000);
    });
});
//# sourceMappingURL=test.js.map