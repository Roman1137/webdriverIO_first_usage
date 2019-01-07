"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />
let chaiHttp = require("chai-http");
let chai = require("chai");
chai.use(chaiHttp);
const chai_1 = require("chai");
describe("sdsdsd", () => {
    before(() => {
        browser.url("http://google.com");
    });
    it('should ', async () => {
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
        let response = await chai.request('http://google.com').get('/');
        console.log(response.text);
    });
});
//# sourceMappingURL=test.js.map