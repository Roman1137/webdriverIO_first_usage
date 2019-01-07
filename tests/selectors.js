"use strict";
/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
describe("sdsdsd", () => {
    before(() => {
        browser.url("https://www.seleniumhq.org/");
    });
    it('should ', () => {
        let elementByCss = $("#mainContent + h2");
        let elementByLinkText = $("=edit this page");
        let elementByPartialLinkText = $("*=edit this");
        let elementByTextAndTag = $("a=edit this page");
        let elementByIdAndText = $("#close=x");
        let elementByTagName = $("<em />");
        let elementByXpath = $("//*[@type='submit']");
    });
});
//# sourceMappingURL=selectors.js.map