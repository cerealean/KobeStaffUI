"use strict";

angular.module("KobeStaffWebsite")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                templateUrl: "templates/index.html",
                controller: "IndexController",
                controllerAs: "indexController"
            })
            .otherwise({
                redirectTo: "/"
            })
    });