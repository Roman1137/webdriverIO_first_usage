/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />

import {expect} from 'chai';

describe("sdsdsd", ()=> {
    before(() => {
        browser.url("http://google.com");
    });

    it('should ', () => {
        //debugger;
        const title : string = browser.getTitle();
        expect(title).to.contain("Google");
        browser.pause(1000);

        let element = $("[class='gLFyf gsfi']");
        element.waitForDisplayed(5000);
        element.setValue("protractor");
        browser.pause(1000);
        $("[name=btnK]").click();
        browser.pause(1000);
    });
});