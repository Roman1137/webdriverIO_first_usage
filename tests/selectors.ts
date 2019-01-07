/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />

import {expect} from "chai";

describe("sdsdsd", ()=> {
    before(() => {
        browser.url("https://www.seleniumhq.org/");
    });

    it('should ', () => {
        let elementByCss : WebdriverIO.Element<void> = $("#mainContent + h2");
        let elementByLinkText : WebdriverIO.Element<void> = $("=edit this page");
        let elementByPartialLinkText : WebdriverIO.Element<void> = $("*=edit this");
        let elementByTextAndTag : WebdriverIO.Element<void> = $("a=edit this page");
        let elementByIdAndText :WebdriverIO.Element<void> = $("#close=x")
        let elementByTagName : WebdriverIO.Element<void> = $("<em />");
        let elementByXpath:  WebdriverIO.Element<void> = $("//*[@type='submit']");
    });
});