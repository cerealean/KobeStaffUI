"use strict";

class RequestOffController {
    constructor($watch){
        this.currentDate = new Date();
        this.minimumDaysOffset = 14;
        this.minDate = this.generateMinimumRequestOffOffset();
        this.requestOff = {
            "startDate" : this.minDate,
            "endDate" : this.minDate
        };
        $watch('requestOff.startDate', (newValue, oldValue) => {
            if(!newValue) return;

            if(this.requestOff.endDate){
                if(this.requestOff.endDate < this.requestOff.startDate){
                    this.requestOff.endDate = newValue;
                }
            }
            else{
                this.requestOff.endDate = newValue;
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
    .controller("RequestOffController", ["$watch", ($watch) => new RequestOffController($watch)]);