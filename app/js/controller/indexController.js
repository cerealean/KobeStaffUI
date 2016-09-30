"use strict";

class IndexController {
    constructor(){
        this.toolbarTitle = "Home";
        this.menuItems = require("../../resources/menu.json");
    }
}

angular.module("KobeStaffWebsite")
    .controller("IndexController", () => new IndexController());