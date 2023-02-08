"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allotment = void 0;
function Allotment() {
    let teamMembers = ["Krishnaveni", "Prakash", "Venkat", "Hafeez", "Akash", "Shaquib", "Rashmi", "Rohit", "Deepak"];
    let array = Array.from({ length: teamMembers.length }, () => Math.floor(Math.random() * Date.now()));
    let allignment = {};
    for (let i = 0; i < teamMembers.length; i++) {
        allignment[array[i]] = teamMembers[i];
    }
    let listinagArray = Object.keys(allignment);
    // console.log(listinagArray.sort(),"after sorting")
    listinagArray.sort();
    return { listinagArray, allignment };
}
exports.Allotment = Allotment;
