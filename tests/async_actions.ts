/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />

import {expect} from 'chai';
//import 'webdriverio';



describe("async actions", () => {
    beforeEach(() => {
        browser.url("https://www.seleniumhq.org/")
    });

    it('should work',() => {
        debugger;
        const title : string = browser.getTitle();
        let mainContentElement = $("#mainContent + h2");
        mainContentElement.waitForDisplayed(5000);

        let projectsElement = $("#menu_projects");
        projectsElement.click();

        browser.pause(3000);
        let seleniumProjectsHeader = $('h2');
        seleniumProjectsHeader.waitForDisplayed(5000);

        let text : string = $("a[href='remote-control/']").getText();
        expect(text).to.contain("Selenium Remote Control");
        console.log(text);
    });
});