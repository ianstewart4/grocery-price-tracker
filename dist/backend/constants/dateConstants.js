"use strict";
// Getting DDMMYYY formatted date for API requirement
Object.defineProperty(exports, "__esModule", { value: true });
exports.ddmmyyyy = void 0;
const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();
const day = dd < 10 ? '0' + dd : String(dd);
const month = mm < 10 ? '0' + mm : String(mm);
exports.ddmmyyyy = day + month + yyyy;
