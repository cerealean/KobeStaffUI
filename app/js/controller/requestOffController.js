"use strict";
class RequestOffController {
    constructor($scope){
        this.toolbarTitle = "Request Off";
        this.$scope = $scope;
        this.currentDate = new Date();
        this.minimumDaysOffset = 14;
        this.minDate = this.generateMinimumRequestOffOffset();
        this.requestOff = {
            "startDate" : this.minDate,
            "endDate" : this.minDate
        };
        this.restrictStartDateBeingGreaterThanEndDate();
    }

    restrictStartDateBeingGreaterThanEndDate(){
        this.$scope.$watch('controller.requestOff.startDate', (newValue, oldValue) => {
            if(newValue){
                const endDateLessThanStartDate = this.requestOff.endDate && (this.requestOff.endDate < this.requestOff.startDate);
                this.requestOff.endDate = endDateLessThanStartDate ? newValue : oldValue;
            }
        })
    }

    generateMinimumRequestOffOffset(){
        return new Date(
            this.currentDate.getFullYear(),
            this.currentDate.getMonth(),
            this.currentDate.getDate() + this.minimumDaysOffset
        );
    }
}

angular.module("KobeStaffWebsite")
    .controller("RequestOffController", ['$scope',($scope) => new RequestOffController($scope)]);