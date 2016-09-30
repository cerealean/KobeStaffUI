'use strict';

class ScheduleController {
    constructor(){
        this.toolbarTitle = "Schedule";
        this.setWeekdayDates(new Date())
        this.employeesForSchedule = this.getEmployeesForSchedule();
        this.createFakeData();
    }

    createFakeData(){
        this.schedule = {
            "Sunday" : {
                "Date" : this.sundayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            },
            "Monday" : {
                "Date" : this.mondayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            },
            "Tuesday" : {
                "Date" : this.tuesdayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            },
            "Wednesday" : {
                "Date" : this.wednesdayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            },
            "Thursday" : {
                "Date" : this.thursdayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            },
            "Friday" : {
                "Date" : this.fridayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            },
            "Saturday" : {
                "Date" : this.saturdayDate,
                "Staff" : [
                    {"Id": 1, "Name": "Sunshine"},
                    {"Id": 2, "Name": "Bob"},
                    {"Id": 3, "Name": "Adele"}
                ]
            }
        };
        this.roles = [
            {"Id": 1, "Name": "Server"},
            {"Id": 2, "Name": "Host"},
            {"Id": 3, "Name": "Manager"},
            {"Id": 4, "Name": "Float"}
        ];
        this.selectedRole = this.roles[0];
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

    getEmployeesForSchedule(){
        return [
            {"Id": 1, "Name": "Sunshine"},
            {"Id": 2, "Name": "Bob"},
            {"Id": 3, "Name": "Adele"}
        ];
    }

    employeeListOnCopy(){
        this.employeesForSchedule = this.removeDuplicateObjectsByKey(this.employeesForSchedule, "Id");
    }

    removeDuplicateObjectsByKey(objects, key){
        let ids = {};
        let uniqueObjects = [];

        if(!objects || !(objects instanceof Array)){
            console.warn("Objects must be an array of objects");
        }
        else if(!key){
            console.warn("Key must be a non-empty string");
        }
        else{
            uniqueObjects = objects.filter(object => {
                if(ids.hasOwnProperty(object[key])){
                    return false;
                }
                else{
                    ids[object[key]] = true;
                    return true;
                }
            });
        }

        return uniqueObjects;
    }
}

angular.module("KobeStaffWebsite")
    .controller("ScheduleController", () => new ScheduleController());