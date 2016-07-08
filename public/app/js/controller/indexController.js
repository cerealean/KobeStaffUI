"use strict";

class IndexController {
    constructor(){
        this.menuItems = require("../../resources/menu.json");
        console.log(this.menuItems);
    }
}

angular.module("KobeStaffWebsite")
    .controller("IndexController", () => new IndexController());