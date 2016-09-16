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
            .when("/schedule", {
                templateUrl: "templates/schedule/schedule.html",
                controller: "ScheduleController",
                controllerAs: "scheduleController"
            })
            .otherwise({
                redirectTo: "/"
            })
    });