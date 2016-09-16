'use strict';

class ScheduleController {
    constructor(){
        this.toolbarTitle = "Schedule";
        this.setWeekdayDates(new Date())
    }

    setWeekdayDates(sundayDate){
        if(!(sundayDate instanceof Date)){
            throw new Error("Cannot set weekdays. Improper Date passed in.");
        }

        this.sundayDate = sundayDate;
        this.mondayDate = sundayDate.addDays(1);
        this.tuesdayDate = sundayDate.addDays(2);
        this.wednesdayDate = sundayDate.addDays(3);
        this.thursdayDate = sundayDate.addDays(4);
        this.fridayDate = sundayDate.addDays(5);
        this.saturdayDate = sundayDate.addDays(6);
    }


}

angular.module("KobeStaffWebsite")
    .controller("ScheduleController", () => new ScheduleController());