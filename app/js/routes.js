"use strict";

angular.module("KobeStaffWebsite")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                templateUrl: "templates/index.html",
                controller: "IndexController",
                controllerAs: "controller"
            })
            .when("/request-off", {
                templateUrl: "templates/request-off.html",
                controller: "RequestOffController",
                controllerAs: "controller"
            })
            .when("/schedule", {
                templateUrl: "templates/schedule/schedule.html",
                controller: "ScheduleController",
                controllerAs: "controller"
            })
            .when("/logout", {
                templateUrl: "/app/templates/logout/logout.html",
                controller: "LogoutController",
                controllerAs: "controller"
            })
            .otherwise({
                redirectTo: "/"
            })
    });