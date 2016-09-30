"use strict";
const dependencies = [
    "ngRoute",
    "ngAnimate",
    "ngMaterial",
    "ngMessages",
    "ngMdIcons",
    "dndLists"
];
angular.module("KobeStaffWebsite", dependencies);

Date.prototype.addDays = function(daysToAdd){
    if(isNaN(daysToAdd)){
        throw new Error("daysToAdd must be an integer!");
    }

    return new Date().setDate(this.getDate() + daysToAdd);
};
