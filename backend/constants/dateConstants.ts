// Getting DDMMYYY formatted date for API requirement

const today: Date = new Date();
const yyyy: number = today.getFullYear();
let mm: number = today.getMonth() + 1; // Months start at 0!
let dd: number = today.getDate();

const day: string = dd < 10 ? '0' + dd : String(dd)
const month: string = mm < 10 ? '0' + mm : String(mm)

export const ddmmyyyy = day + month + yyyy;