"use strict";

angular.module("KobeStaffWebsite")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                templateUrl: "templates/index.html",
                controller: "IndexController",
                controllerAs: "indexController"
            })
            .when("/request-off", {
                templateUrl: "templates/request-off.html",
                controller: "RequestOffController",
                controllerAs: "requestOffController"
            })
            .otherwise({
                redirectTo: "/"
            })
    });