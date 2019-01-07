/// <reference path="../node_modules/webdriverio/webdriverio.d.ts" />

import {expect} from 'chai';


describe("olx_scenario", () => {
    beforeEach(() => {
        browser.url("https://www.olx.ua/");
    });

    it('should work',() => {
        let propertyElement = $("[class*='link parent'][data-id='1']");
        propertyElement.waitForDisplayed(5000);
        propertyElement.waitForEnabled(5000);
        propertyElement.click();

        let flatsAndRoomsElement = $("[data-id='1596']");

        flatsAndRoomsElement.waitForDisplayed(5000);
        flatsAndRoomsElement.waitForEnabled(5000);
        flatsAndRoomsElement.click();

        let flatAndRoomsDropDown = $("[class='rel combospace']");
        flatAndRoomsDropDown.waitForExist(20000);
        flatAndRoomsDropDown.waitForEnabled(20000);

        let text : string = flatAndRoomsDropDown.getText();
        expect(text).to.contain("Квартиры, комнаты");
        console.log(text);

        flatAndRoomsDropDown.click();

        let allOptionsElement = $("#categorySelectList");
        allOptionsElement.waitForDisplayed(5000);
        allOptionsElement.waitForEnabled(5000);

        let electronicElement = $(".categorySelectA1#a-category-37[data-id='37']");
        electronicElement.moveTo(0,0);

        let liElements = $$("ul#categorySelectList > li");
        let isHoverAttributePresent : Function = async () => liElements.some(elm => {
            let attribute = elm.getAttribute("class");
            console.log(attribute);
            return attribute === "hover";
        });

        browser.waitUntil(isHoverAttributePresent);
    });
});